import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS_OTHERS';

import Module from 'Parser/Core/Module';
import calculateEffectiveHealing from 'Parser/Core/calculateEffectiveHealing';

const GNAWED_THUMB_RING_HEALING_INCREASE = 0.05;

class GnawedThumbRing extends Module {
  healingIncreaseHealing = 0;
  damageIncrease = 0;

  on_initialized() {
    if (!this.owner.error) {
      this.active = this.owner.selectedCombatant.hasFinger(ITEMS.GNAWED_THUMB_RING.id);
    }
  }

  on_byPlayer_heal(event) {
    const spellId = event.ability.guid;
    if (this.owner.constructor.abilitiesAffectedByHealingIncreases.indexOf(spellId) === -1) {
      return;
    }

    if(this.owner.selectedCombatant.hasBuff(SPELLS.GNAWED_THUMB_RING.id)) {
      this.healingIncreaseHealing += calculateEffectiveHealing(event, GNAWED_THUMB_RING_HEALING_INCREASE);
    }
  }

  on_byPlayer_damage(event) {
    if(this.owner.selectedCombatant.hasBuff(SPELLS.GNAWED_THUMB_RING.id)) {
      this.damageIncrease += calculateEffectiveHealing(event, GNAWED_THUMB_RING_HEALING_INCREASE);
    }
  }
}

export default GnawedThumbRing;
