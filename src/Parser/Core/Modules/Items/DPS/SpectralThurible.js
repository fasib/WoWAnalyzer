import ITEMS from 'common/ITEMS';
import SPELLS from 'common/SPELLS';

import Module from 'Parser/Core/Module';

class SpectralThurible extends Module {
  damage = 0;

  on_initialized() {
    if (!this.owner.error) {
      this.active = this.owner.selectedCombatant.hasTrinket(ITEMS.SPECTRAL_THURIBLE.id);
    }
  }

  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    if (spellId === SPELLS.PIERCING_ANGUISH.id) {
      this.damage += event.amount;
    }
  }
}

export default SpectralThurible;
