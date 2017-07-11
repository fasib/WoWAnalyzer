import ITEMS from 'common/ITEMS';

import Module from 'Parser/Core/Module';

const PRISTINE_PROTO_SCALE_GIRDLE_ID = 224852;

class PristineProtoScaleGirdle extends Module {
  damage = 0;
  uptime = 0;

  lastAppliedTimestamp = null;

  on_initialized() {
    if (!this.owner.error) {
      this.active = this.owner.selectedCombatant.hasWaist(ITEMS.PRISTINE_PROTO_SCALE_GIRDLE.id);
    }
  }

  on_byPlayer_applydebuff(event) {
    const spellId = event.ability.guid;
    if (spellId === PRISTINE_PROTO_SCALE_GIRDLE_ID) {
      this.lastAppliedTimestamp = event.timestamp;
      if (this.count > this.maxCount) {
        this.maxCount = this.count;
      }
    }
  }

  on_byPlayer_removedebuff(event) {
    const spellId = event.ability.guid;
    if (spellId === PRISTINE_PROTO_SCALE_GIRDLE_ID) {
      this.uptime += event.timestamp - this.lastAppliedTimestamp;
      this.lastAppliedTimestamp = null;
    }
  }

  on_byPlayer_damage(event) {
    const spellId = event.ability.guid;
    if (spellId === PRISTINE_PROTO_SCALE_GIRDLE_ID) {
      this.damage += event.amount;
    }
  }

  on_finished() {
    if (this.lastAppliedTimestamp) {
      this.uptime += this.owner.fight.end_time - this.lastAppliedTimestamp;
    }
  }
}

export default PristineProtoScaleGirdle;