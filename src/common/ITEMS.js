import indexById from './indexById';

import ITEM_QUALITIES from './ITEM_QUALITIES';

const ITEMS = {
  POTION_OF_PROLONGED_POWER: {
    id: 142117,
    name: 'Potion of Prolonged Power',
    icon: 'trade_alchemy_dpotion_a28',
  },
  POTION_OF_THE_OLD_WAR: {
    id: 127844,
    name: 'Potion of the Old War',
    icon: 'inv_alchemy_70_orange',
  },
  POTION_OF_DEADLY_GRACE: {
    id: 127843,
    name: 'Potion of Deadly Grace',
    icon: 'inv_alchemy_70_flask02',
  },
  LEYTORRENT_POTION: {
    id: 127846,
    name: 'Leytorrent Potion',
    icon: 'inv_alchemy_70_flask01',
  },
  ANCIENT_MANA_POTION: {
    id: 127835,
    name: 'Ancient Mana Potion',
    icon: 'inv_alchemy_70_blue',
  },
  PRYDAZ_XAVARICS_MAGNUM_OPUS: {
    id: 132444,
    name: 'Prydaz, Xavaric\'s Magnum Opus',
    icon: 'inv_misc_necklace15',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  SEPHUZS_SECRET: {
    id: 132452,
    name: 'Sephuz\'s Secret',
    icon: 'inv_jewelry_ring_149',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  VELENS_FUTURE_SIGHT: {
    id: 144258,
    name: 'Velen\'s Future Sight',
    icon: 'spell_holy_healingfocus',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  GNAWED_THUMB_RING: {
    id: 134526,
    name: 'Gnawed Thumb Ring',
    icon: 'inv_70_dungeon_ring6a',
    quality: ITEM_QUALITIES.EPIC,
  },

  OBSIDIAN_STONE_SPAULDERS: {
    id: 137076,
    name: 'Obsidian Stone Spaulders',
    icon: 'inv_shoulder_plate_pvppaladin_o_01',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  ILTERENDI_CROWN_JEWEL_OF_SILVERMOON: {
    id: 137046,
    name: 'Ilterendi, Crown Jewel of Silvermoon',
    icon: 'inv_jewelry_ring_firelandsraid_03a',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  SOUL_OF_THE_HIGHLORD: {
    id: 151644,
    name: 'Soul of the Highlord',
    icon: 'inv_jewelry_ring_68',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  CHAIN_OF_THRAYN: {
    id: 137086,
    name: 'Chain of Thrayn',
    icon: 'inv_belt_leather_firelandsdruid_d_01',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  MARAADS_DYING_BREATH: {
    id: 144273,
    name: 'Maraad\'s Dying Breath',
    icon: 'item_icecrowncape',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  DRAPE_OF_SHAME: {
    id: 142170,
    name: 'Drape of Shame',
    icon: 'inv_cape_legionendgame_c_03',
    quality: ITEM_QUALITIES.EPIC,
  },
  ROOTS_OF_SHALADRASSIL: {
    id: 132466,
    name: 'Roots of Shaladrassil',
    icon: 'inv_robe_pants_pvpwarlock_c_02',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  PRAETORIANS_TIDECALLERS: {
    id: 137058,
    name: 'Praetorian\'s Tidecallers',
    icon: 'inv_gauntlets_plate_raidpaladin_i_01',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  FOCUSER_OF_JONAT: {
    id: 137051,
    name: 'Focuser of Jonat, the Elder',
    icon: 'inv_jewelry_ring_96',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  INTACT_NAZJATAR_MOLTING: {
    id: 137085,
    name: 'Intact Nazjatar Molting',
    icon: 'inv_leather_raiddruid_m_01belt',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  NOBUNDOS_REDEMPTION: {
    id: 137104,
    name: 'Nobundo\'s Redemption',
    icon: 'inv_bracer_leather_cataclysm_b_01',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  UNCERTAIN_REMINDER: {
    id: 143732,
    name: 'Uncertain Reminder',
    icon: 'inv_helm_mail_korkronshaman_d_01',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  EYE_OF_THE_TWISTING_NETHER: {
    id: 137050,
    name: 'Eye of the Twisting Nether',
    icon: 'inv_jewelry_ring_ahnqiraj_02',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  PRISTINE_PROTO_SCALE_GIRDLE: {
    id: 137083,
    name: 'Pristine Proto-Scale Girdle',
    icon: 'inv_belt_mail_panda_b_01white',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  // PRIEST LEGENDARIES
  CORD_OF_MAIEV_PRIESTESS_OF_THE_MOON: {
    id: 133800,
    name: 'Cord of Maiev, Priestess of the Moon',
    icon: 'inv_belt_leather_panda_b_02_crimson',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  SKJOLDR_SANCTUARY_OF_IVAGONT: {
    id: 132436,
    name: 'Skjoldr, Sanctuary of Ivagont',
    icon: 'inv_bracer_56',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  XALAN_THE_FEAREDS_CLENCH: {
    id: 132461,
    name: 'Xalan the Feared\'s Clench',
    icon: 'inv_gauntlets_14',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  NERO_BAND_OF_PROMISES: {
    id: 137276,
    name: 'N\'ero, Band of Promises',
    icon: 'inv_jewelry_ring_54',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  SOUL_OF_THE_HIGH_PRIEST: {
    id: 151646,
    name: 'Soul of the High Priest',
    icon: 'inv_jewelry_ring_67',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  ENTRANCING_TROUSERS_OF_ANJUNA: {
    id: 132447,
    name: 'Entrancing Trousers of An\'juna',
    icon: 'inv_pants_robe_raidwarlock_j_01',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  XANSHI_CLOAK: { // when XANSHI_SHROUD_OF_ARCHBISHOP_BENEDICTUS is just too long :^)
    id: 137109,
    name: 'X\'anshi, Shroud of Archbishop Benedictus',
    icon: 'inv_misc_cape_20',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  // Trinkets
  DARKMOON_DECK_PROMISES: {
    id: 128710,
    name: 'Darkmoon Deck: Promises',
    icon: '70_inscription_deck_promises',
    quality: ITEM_QUALITIES.EPIC,
  },
  AMALGAMS_SEVENTH_SPINE: {
    id: 136714,
    name: 'Amalgam\'s Seventh Spine',
    icon: 'spell_priest_mindspike',
    quality: ITEM_QUALITIES.EPIC,
  },
  // Set Bonuses (Generic)
  CHAIN_OF_SCORCHED_BONES: {
    id: 134529,
    name: 'Chain of Scorched Bones',
    icon: 'inv_7_0raid_necklace_13d',
    quality: ITEM_QUALITIES.EPIC,
  },
  RING_OF_LOOMING_MENACE: {
    id: 134533,
    name: 'Ring of Looming Menace',
    icon: 'inv_70_dungeon_ring8d',
    quality: ITEM_QUALITIES.EPIC,
  },
  // Resto Druid legendaries:
  EKOWRAITH_CREATOR_OF_WORLDS: {
    id: 137015,
    name: 'Ekowraith, Creator of Worlds',
    icon: 'inv_chest_leather_13',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  XONIS_CARESS: {
    id: 144242,
    name: 'X\'oni\'s Caress',
    icon: 'inv_glove_leather_raidrogue_m_01',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  THE_DARK_TITANS_ADVICE: {
    id: 137078,
    name: 'The Dark Titan\'s Advice',
    icon: 'inv_belt_leather_raidrogue_l_01',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  ESSENCE_OF_INFUSION: {
    id: 137026,
    name: 'Essence of Infusion',
    icon: 'inv_boots_leather_10v3',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  TEARSTONE_OF_ELUNE: {
    id: 137042,
    name: 'Tearstone of Elune',
    icon: 'inv_misc_pearlring2',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  CHAMELEON_SONG: {
    id: 151783,
    name: 'Chameleon Song',
    icon: 'inv_helmet_153',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  SOUL_OF_THE_ARCHDRUID: {
    id: 151636,
    name: 'Soul of the Archdruid',
    icon: 'inv_70_raid_ring6a',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  // Monk Legedaries
  EITHAS_LUNAR_GLIDES: {
    id: 137028,
    name: 'Ei\'thas, Lunar Glides of Eramas',
    icon: 'inv_boots_mail_04black',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  DOORWAY_TO_NOWHERE: {
    id: 151784,
    name: 'Doorway to Nowhere',
    icon: 'inv_misc_cape_cataclysm_healer_b_01',
    quality: ITEM_QUALITIES.LEGENDARY,
  },
  SHELTER_OF_RIN: {
    id: 144340,
    name: 'Shelter of Rin',
    icon: 'inv_chest_plate27v2',
    quality: ITEM_QUALITIES.LEGENDARY,
  },

  // T20 Trinkets
  ARCHIVE_OF_FAITH: {
    id: 147006,
    name: 'Archive of Faith',
    icon: 'inv__wod_arakoa4',
    quality: ITEM_QUALITIES.EPIC,
  },
  BARBARIC_MINDSLAVER: {
    id: 147003,
    name: 'Barbaric Mindslaver',
    icon: 'spell_priest_psyfiend',
    quality: ITEM_QUALITIES.EPIC,
  },
  DECEIVERS_GRAND_DESIGN: {
    id: 147007,
    name: 'The Deceiver\'s Grand Design',
    icon: 'inv_offhand_1h_pvpcataclysms3_c_01',
    quality: ITEM_QUALITIES.EPIC,
  },
  SEA_STAR_OF_THE_DEPTHMOTHER: {
    id: 147004,
    name: 'Sea Star of the Depthmother',
    icon: 'inv_jewelcrafting_starofelune_02',
    quality: ITEM_QUALITIES.EPIC,
  },
  // DPS Trinkets
  TARNISHED_SENTINEL_MEDALLION: {
    id: 147017,
    name: 'Tarnished Sentinel Medallion',
    icon: 'inv_jewelcrafting_purpleowl.jpg',
    quality: ITEM_QUALITIES.EPIC,
  },
  TERROR_FROM_BELOW: {
    id: 147016,
    name: 'Terror From Below',
    icon: 'trade_archaeology_sharkjaws',
    quality: ITEM_QUALITIES.EPIC,
  },
  SPECTRAL_THURIBLE: {
    id: 147018,
    name: 'Spectral Thurible',
    icon: 'inv_6_2raid_trinket_1d',
    quality: ITEM_QUALITIES.EPIC,
  },
  TARNISHED_SENTINEL_MEDALLION: {
    id: 147017,
    name: 'Tarnished Sentinel Medallion',
    icon: 'inv_jewelcrafting_purpleowl',
    quality: ITEM_QUALITIES.EPIC,
  },
};

export default indexById(ITEMS);
