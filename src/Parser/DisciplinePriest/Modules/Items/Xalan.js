import SPELLS from 'common/SPELLS';
import ITEMS from 'common/ITEMS';

import Module from 'Parser/Core/Module';

const debug = false;

class Xalan extends Module {
  healing = 0;
  hasContrition = false;

  get atonementDuration() {
    return 15 + (this.hasContrition ? 3 : 0);
  }

  on_initialized() {
    if (!this.owner.error) {
      this.active = this.owner.selectedCombatant.hasHands(ITEMS.XALAN_THE_FEAREDS_CLENCH.id);
      this.hasContrition = this.owner.selectedCombatant.hasTalent(SPELLS.CONTRITION_TALENT.id);
    }
  }

  lastAtonmentAppliedTimestamp = null;
  on_byPlayer_applybuff(event) {
    const spellId = event.ability.guid;
    if (spellId !== SPELLS.ATONEMENT_BUFF.id) {
      return;
    }
    if (!this.owner.toPlayer(event)) {
      return;
    }
    this.lastAtonmentAppliedTimestamp = event.timestamp;
  }
  on_byPlayer_refreshbuff(event) {
    const spellId = event.ability.guid;
    if (spellId !== SPELLS.ATONEMENT_BUFF.id) {
      return;
    }
    if (!this.owner.toPlayer(event)) {
      return;
    }
    this.lastAtonmentAppliedTimestamp = event.timestamp;
  }

  on_byPlayer_heal(event) {
    const spellId = event.ability.guid;
    if (spellId !== SPELLS.ATONEMENT_HEAL_NON_CRIT.id && spellId !== SPELLS.ATONEMENT_HEAL_CRIT.id) {
      return;
    }
    if (!this.owner.toPlayer(event)) {
      return;
    }
    if (this.lastAtonmentAppliedTimestamp === null) {
      // This can be `null` when Atonement wasn't applied in the combatlog. This often happens as Discs like to apply Atonement prior to combat.
      this.lastAtonmentAppliedTimestamp = this.owner.fight.start_time;
      debug && console.warn('Xalan: was applied prior to combat');
    }

    if ((event.timestamp - this.lastAtonmentAppliedTimestamp) < (this.atonementDuration * 1000)) {
      return;
    }

    debug && console.log('Xalan:', event.amount + (event.absorbed || 0), 'healing done');
    this.healing += event.amount + (event.absorbed || 0);
  }
}

export default Xalan;
