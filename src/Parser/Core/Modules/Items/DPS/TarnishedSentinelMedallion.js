import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';

import Module from 'Parser/Core/Module';

class TarnishedSentinelMedallion extends Module {
  damage = 0;

  on_initialized() {
    if (!this.owner.error) {
      this.active = this.owner.selectedCombatant.hasTrinket(ITEMS.TARNISHED_SENTINEL_MEDALLION.id);
    }
  }

  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    if (spellId === SPELLS.SPECTRAL_BLAST.id || spellId === SPELLS.SPECTRAL_BOLT.id) {
      this.damage += event.amount;
    }
  }
}

export default TarnishedSentinelMedallion;
