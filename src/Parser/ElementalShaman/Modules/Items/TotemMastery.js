import SPELLS from 'common/SPELLS';

import Module from 'Parser/Core/Module';
import calculateEffectiveHealing from 'Parser/Core/calculateEffectiveHealing';

const BUFF_TOTEM_RESONANCE_SPELL_ID = 202188;
const BUFF_TOTEM_EMBER_SPELL_ID = 210657;
const BUFF_TOTEM_TAILWIND_SPELL_ID = 210660;
const BUFF_TOTEM_STORM_SPELL_ID = 210651;

const EMBER_TOTEM_BONUS = 0.1;

class TotemMastery extends Module {
  uptimeResonance = 0;
  uptimeEmber = 0;
  uptimeTailwind = 0;
  uptimeStorm = 0;

  overallUptime = 0;
  flameshockDamage = 0;

  on_initialized() {
    if (!this.owner.error) {
      this.active = this.owner.selectedCombatant.hasTalent(SPELLS.TOTEM_MASTERY_TALENT.id);
    }
  }

  on_finished() {
    this.uptimeResonance = this.owner.selectedCombatant.getBuffUptime(BUFF_TOTEM_RESONANCE_SPELL_ID);
    this.uptimeEmber = this.owner.selectedCombatant.getBuffUptime(BUFF_TOTEM_EMBER_SPELL_ID);
    this.uptimeTailwind = this.owner.selectedCombatant.getBuffUptime(BUFF_TOTEM_TAILWIND_SPELL_ID);
    this.uptimeStorm = this.owner.selectedCombatant.getBuffUptime(BUFF_TOTEM_STORM_SPELL_ID);
    this.overallUptime = this.uptimeResonance <= this.uptimeEmber ? this.uptimeResonance : this.uptimeEmber;
    this.overallUptime = this.overallUptime < this.uptimeTailwind ? this.overallUptime : this.uptimeTailwind;
    this.overallUptime = this.overallUptime < this.uptimeStorm ? this.overallUptime : this.uptimeTailwind;
  }

  getUptime(fightDuration) {
      const uptimeResonance = (this.uptimeResonance / fightDuration);
      const uptimeEmber = (this.uptimeEmber / fightDuration);
      const uptimeTailwind = (this.uptimeTailwind / fightDuration);
      const uptimeStorm = (this.uptimeStorm / fightDuration);

      return {uptimeResonance, uptimeEmber, uptimeTailwind, uptimeStorm};
  }

  on_byPlayer_damage(event) {
    const hasBuff = this.owner.selectedCombatant.hasBuff(BUFF_TOTEM_EMBER_SPELL_ID, event.timestamp);
    if (!hasBuff) {
      return;
    }
    
    const spellId = event.ability.guid;
    if (spellId === SPELLS.FLAME_SHOCK.id) {
      this.flameshockDamage += calculateEffectiveHealing(event, EMBER_TOTEM_BONUS);
    }
  }
}

export default TotemMastery;