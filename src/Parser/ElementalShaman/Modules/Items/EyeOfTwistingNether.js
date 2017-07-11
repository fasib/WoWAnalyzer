import ITEMS from 'common/ITEMS';

import Module from 'Parser/Core/Module';
import calculateEffectiveHealing from 'Parser/Core/calculateEffectiveHealing';

const BUFF_FIRE_SPELL_ID = 207995;
const BUFF_FROST_SPELL_ID = 207998;
const BUFF_NATURE_SPELL_ID = 207999;

class EyeOfTwistingNether extends Module {
  damage = 0;

  uptimeFire = 0;
  uptimeFrost = 0;
  uptimeNature = 0;

  lastAppliedFireTimestamp = null;
  lastAppliedFrostTimestamp = null;
  lastAppliedNatureTimestamp = null;

  on_initialized() {
    if (!this.owner.error) {
      this.active = this.owner.selectedCombatant.hasFinger(ITEMS.EYE_OF_THE_TWISTING_NETHER.id);
    }
  }

  on_byPlayer_applybuff(event) {
    const spellId = event.ability.guid;
    if (spellId === BUFF_FIRE_SPELL_ID) {
      this.lastAppliedFireTimestamp = event.timestamp;
    }
    if (spellId === BUFF_FROST_SPELL_ID) {
      this.lastAppliedFrostTimestamp = event.timestamp;
    }
    if (spellId === BUFF_NATURE_SPELL_ID) {
      this.lastAppliedNatureTimestamp = event.timestamp;
    }
  }

  on_byPlayer_removebuff(event) {
    const spellId = event.ability.guid;
    if (spellId === BUFF_FIRE_SPELL_ID) {
      this.uptimeFire += event.timestamp - this.lastAppliedFireTimestamp;
      this.lastAppliedFireTimestamp = null;
    }
    if (spellId === BUFF_FROST_SPELL_ID) {
      this.uptimeFrost += event.timestamp - this.lastAppliedFrostTimestamp;
      this.lastAppliedFrostTimestamp = null;
    }
    if (spellId === BUFF_NATURE_SPELL_ID) {
      this.uptimeNature += event.timestamp - this.lastAppliedNatureTimestamp;
      this.lastAppliedNatureTimestamp = null;
    }
  }

  on_byPlayer_damage(event) {
    if (this.lastAppliedFireTimestamp || this.lastAppliedFrostTimestamp || this.lastAppliedNatureTimestamp) {
      let count = 0;
      if (this.lastAppliedFireTimestamp) {
        count++;
      }
      if (this.lastAppliedFrostTimestamp) {
        count++;
      }
      if (this.lastAppliedNatureTimestamp) {
        count++;
      }
      const sum_increase = (0.015 * count);
      
      this.damage += calculateEffectiveHealing(event, sum_increase);
    }
  }

  on_finished() {
    if (this.lastAppliedFireTimestamp) {
      this.uptimeFire += this.owner.fight.end_time - this.lastAppliedFireTimestamp;
    }
    if (this.lastAppliedFrostTimestamp) {
      this.uptimeFrost += this.owner.fight.end_time - this.lastAppliedFrostTimestamp;
    }
    if (this.lastAppliedNatureTimestamp) {
      this.uptimeNature += this.owner.fight.end_time - this.lastAppliedNatureTimestamp;
    }
  }
}

export default EyeOfTwistingNether;