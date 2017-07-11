import SPELLS from 'common/SPELLS';

import Module from 'Parser/Core/Module';
import calculateEffectiveHealing from 'Parser/Core/calculateEffectiveHealing';

const TIER_20_TWO_SET_BONUS = 0.4;

class Tier20_2set extends Module {
  damage = 0;

  on_initialized() {
    if (!this.owner.error) {
      this.active = this.owner.selectedCombatant.hasBuff(SPELLS.ELEMENTAL_SHAMAN_T20_2SET_BONUS.id);
    }
  }

  on_byPlayer_damage(event) {
    const hasBuff = this.owner.selectedCombatant.hasBuff(SPELLS.ELEMENTAL_SHAMAN_T20_2SET_BONUS_BUFF.id, event.timestamp);
    if (!hasBuff) {
      return;
    }

    const spellId = event.ability.guid;
    if (spellId === SPELLS.FLAME_SHOCK.id) {
      this.damage += calculateEffectiveHealing(event, TIER_20_TWO_SET_BONUS);
      // TODO: calc bonus damage due to 100% crits.
    }
  }
}

export default Tier20_2set;
