/**
 * definitions for spirits in the following structure:
 *    var Spirit = {
       name: full spirit name,
       emote: discord emoji id,
       panel: [front_panel_url, back_panel_url],
       complexity: 1, '2', '3' or '4' (low, moderate, high, very high respectively)
       title: single word the spirit is referred to as
       uniques: [underscored_unique_names],
       aliases: any cute nicknames, emojis or lore relevant names that the spirit might be referred to as
       set: 'base', 'b&c', 'f&f', 'je', 'horizons', 'ni' or unannounced expansion
   }
 */

var Green = {     
    name: 'A Spread of Rampant Green', 
    emote: '<:SpiritSpreadRampantGreen:852365959149912095>', 
    panel: ['https://imgur.com/nlpGjjH' , 'https://imgur.com/iK9NTsz'],      
    complexity: 2,
    title: 'Green',
    uniques: ["fields_choked_with_growth", "stem_the_flow_of_fresh_water", "gift_of_proliferation", "overgrow_in_a_night"],
    aliases: [],
    set: 'base'
    }; 
   
   var BoDaN = {     
    name: 'Bringer of Dreams and Nightmares', 
    emote: '<:SpiritBodanBringerDreamsNightmar:852365960370454528>', 
    panel:[ 'https://imgur.com/UxZyTv2', 'https://imgur.com/VUOjO0v'],      
    complexity: 3,
    title: 'BoDaN',
    uniques: ["call_on_midnights_dreams", "dreams_of_the_dahan", "predatory_nightmares", "dread_apparitions"],
    aliases: ['bodan'],
    set: 'base'
    }; 
   
   var Downpour = {     
    name: 'Downpour Drenches the World', 
    emote: '<:SpiritDownpourDrenchesWorld:852365957744689153>', 
    panel: ['https://imgur.com/vZU2mVT', 'https://imgur.com/CShexIA'],      
    complexity: 3,
    title: 'Downpour',
    uniques: ["unbearable_deluge", "foundations_sink_into_mud", "gift_of_abundance", "dark_skies_loose_a_stinging_rain"],
    aliases: ['bird'],
    set:'f&f'
    }; 
   
   var Fractured = {     
    name: 'Fractured Days Split the Sky', 
    emote: '<:SpiritFracturedDaysSplitSky:852365961800712252>', 
    panel: ['https://imgur.com/MDqxo4i', 'https://imgur.com/7z7V6Ol'],      
    complexity: 4,
    title: 'Fractured',
    uniques: ["the_past_returns_again", "absolute_stasis", "pour_time_sideways", "blur_the_arc_of_years"],
    aliases: [],
    set:'je'
    }; 
   
   var Wildfire = {     
    name: 'Heart of the Wildfire', 
    emote: '<:SpiritHeartWildfire:852365962286989343>', 
    panel: ['https://imgur.com/A4FRUV5', 'https://imgur.com/Y8lVu5J'],      
    complexity: 3,
    title: 'Wildfire',
    uniques: ["flames_fury", "threatening_flames", "flashfires", "asphyxiating_smoke"],
    aliases: [],
    set: 'f&f'
    }; 
   
   var Finder = {     
    name: 'Finder of Paths Unseen', 
    emote: '<:SpiritFinderPathsUnseen:852365960236236811>', 
    panel: ['https://imgur.com/T9HLW7e', 'https://imgur.com/JtdpxCr'],      
    complexity: 4,
    title: 'Finder',
    uniques: ["travelers_boon", "paths_tied_by_nature", "a_circuitous_and_wending_journey", "offer_passage_between_worlds", "ways_of_shore_and_heartland", "aid_from_the_spiritspeakers"],
    aliases: ['bird'],
    set: 'f&f'
    }; 
   
   var Lightning = {     
    name: 'Lightning\'s Swift Strike', 
    emote: '<:SpiritLightningSwiftStrike:852365958839664691> ', 
    panel: ['https://imgur.com/yXE6oHw', 'https://imgur.com/WLcU0w9'],      
    complexity: 1,
    title: 'Lightning',
    uniques: ["harbingers_of_the_lightning", "lightnings_boon", "shatter_homesteads", "raging_storm"],
    aliases: ['bird'],
    set: 'base'
    }; 
   
   var Keeper = {     
    name: 'Keeper of the Forbidden Wilds', 
    emote: '<:SpiritKeeperForbiddenWilds:852365961420210216>', 
    panel: ['https://imgur.com/PBwq5KE', 'https://imgur.com/ZKAblG3'],      
    complexity: 2,
    title: 'Keeper',
    uniques: ["regrow_from_roots", "boon_of_growing_power", "sacrosanct_wilderness", "towering_wrath"],
    aliases: [],
    set:'b&c'
    }; 
   
   var Trickster = {     
    name: 'Grinning Trickster Stirs Up Trouble', 
    emote: '<:SpiritGrinningTricksterStirsTrou:852365959540899911>', 
    panel: ['https://imgur.com/D2geoaL', 'https://imgur.com/i6YLeWv'],      
    complexity: 2,
    title: 'Trickster',
    uniques: ["unexpected_tigers", "impersonate_authority", "incite_the_mob", "overenthusiastic_arson"],
    aliases: [],
    set: 'je'
    }; 
   
   var Lure = {     
    name: 'Lure of the Deep Wilderness', 
    emote: '<:SpiritLureDeepWilderness:852365959237992458>', 
    panel: ['https://imgur.com/Zx3UcPD', 'https://imgur.com/wGPod8z'],      
    complexity: 2,
    title: 'Lure',
    uniques: ["gift_of_the_untamed_wild", "perils_of_the_deepest_island", "swallowed_by_the_wilderness", "softly_beckon_ever_inward"],
    aliases: [],
    set: 'je'
    }; 
   
   var ManyMinds = {     
    name: 'Many Minds Move as One', 
    emote: '<:SpiritManyMindsMoveOne:852365959334854666>', 
    panel: ['https://imgur.com/bA3Rmp8', 'https://imgur.com/XIG39qe'],      
    complexity: 2,
    title: 'ManyMinds',
    uniques: ["pursue_with_scratches_pecks_and_stings", "a_dreadful_tide_of_scurrying_flesh", "boon_of_swarming_bedevilment", "guide_the_way_on_feathered_wings", "evermultiplying_swarm"],
    aliases: ['bird'],
    set: 'je'
    }; 
   
   var Ocean = {     
    name: 'Ocean\'s Hungry Grasp', 
    emote: '<:SpiritOceanHungryGrasp:852365961617211403>', 
    panel: ['https://imgur.com/rrLWF5o', 'https://imgur.com/UVEIJfA'],      
    complexity: 3,
    title: 'Ocean',
    uniques: ["call_of_the_deeps", "swallow_the_landdwellers", "grasping_tide", "tidal_boon"],
    aliases: [],
    set: 'base'
    }; 
   
   var Serpent = {     
    name: 'Serpent Slumbering Beneath the Island', 
    emote: '<:SpiritSnekSerpentSlumbering:852365959989428264>', 
    panel: ['https://imgur.com/PgT7Kyj', 'https://imgur.com/cE7YZ3L'],      
    complexity: 3,
    title: 'Serpent',
    uniques: ["gift_of_the_primordial_deeps", "gift_of_flowing_power", "elemental_aegis", "absorb_essence"],
    aliases: ['snake', 'snek'],
    set: 'f&f'
    }; 
   
   var Fangs = {     
    name: 'Sharp Fangs Behind the Leaves', 
    emote: '<:SpiritSharpFangsLeaves:852365962292494346>', 
    panel: ['https://imgur.com/uxw6S5D', 'https://imgur.com/IoL5BHz'],      
    complexity: 2,
    title: 'Fangs',
    uniques: ["too_near_the_jungle", "prey_on_the_builders", "teeth_gleam_from_darkness", "terrifying_chase"],
    aliases: [],
    set: 'b&c'
    }; 
   
   var Memory = {     
    name: 'Shifting Memory of Ages', 
    emote: '<:SpiritShiftingMemoryAges:852365960593932318>', 
    panel: ['https://i.imgur.com/1C7h4gG.jpg ', 'https://imgur.com/BB48p9Q'],      
    complexity: 2,
    title: 'Memory',
    uniques: ["elemental_teachings", "share_secrets_of_survival", "study_the_invaders_fears", "boon_of_ancient_memories"],
    aliases: [],
    set: 'je'
    }; 
   
   var Mist = {     
    name: 'Shroud of Silent Mist', 
    emote: '<:SpiritShroudSilentMist:852365959183204402>', 
    panel: ['https://imgur.com/AgBKUYl', 'https://imgur.com/sE5Iasm'],      
    complexity: 3,
    title: 'Mist',
    uniques: ["flowing_and_silent_forms_dart_by", "the_fog_closes_in", "unnerving_pall", "dissolving_vapors"],
    aliases: [],
    set: 'je'
    }; 
   
   var Starlight = {     
    name: 'Starlight Seeks Its Form', 
    emote: '<:SpiritStarlightSeeksForm:852365959801077782>', 
    panel: ['https://imgur.com/fkB6Y05', 'https://imgur.com/pCuo4XJ'],      
    complexity: 4,
    title: 'Starlight',
    uniques: ["gather_the_scattered_light_of_stars", "shape_the_self_anew", "boon_of_reimagining", "peace_of_the_nighttime_sky"],
    aliases: [],
    set:'je'
    }; 
   
   var Stone = {     
    name: 'Stone\'s Unyielding Defiance', 
    emote: '<:SpiritStoneUnyieldingDefiance:852365962187374632>', 
    panel: ['https://imgur.com/FhEIqB6', 'https://imgur.com/RqlC8ZP'],      
    complexity: 2,
    title: 'Stone',
    uniques: ["jagged_shards_push_from_the_earth", "stubborn_solidity", "scarred_and_stony_land", "plows_shatter_on_rocky_ground"],
    aliases: [],
    set:'je'
    }; 
   
   var Thunderspeaker = {     
    name: 'Thunderspeaker', 
    emote: '<:SpiritThunderspeaker:852365958789857342>', 
    panel: ['https://imgur.com/5xnsvD8', 'https://imgur.com/PztVF5L'],      
    complexity: 2,
    title: 'Thunderspeaker',
    uniques: ["voice_of_thunder", "words_of_warning", "sudden_ambush", "manifestation_of_power_and_glory"],
    aliases: [],
    set:'base'
    }; 
   
   var Shadows = {     
    name: 'Shadows Flicker Like Flame', 
    emote: '<:SpiritShadowsFlickerFlame:852365960286568479>', 
    panel: ['https://imgur.com/FmVImnv', 'https://imgur.com/oyk2ZwH'],      
    complexity: 1,
    title: 'Shadows',
    uniques: ["concealing_shadows", "favors_called_due", "mantle_of_dread", "crops_wither_and_fade"],
    aliases: [],
    set:'base'
    }; 
   
   var River = {     
    name: 'River Surges in Sunlight', 
    emote: '<:SpiritRiverSurgesSunlight:852365960916762635>', 
    panel: ['https://imgur.com/pmdjfxu', 'https://imgur.com/uv0mMRV'],      
    complexity: 1,
    title: 'River',
    uniques: ["boon_of_vigor", "rivers_bounty", "wash_away", "flash_floods"],
    aliases: [],
    set:'base'
    }; 
   
   var Vengeance = {     
    name: 'Vengeance as a Burning Plague', 
    emote: '<:SpiritVengeanceBurningPlague:852365959222263868>', 
    panel:[ 'https://imgur.com/EgzpSLC','https://imgur.com/4hnimN9'],      
    complexity: 3,
    title: 'Vengeance' ,
    uniques: ["fiery_vengeance", "plaguebearers", "fetid_breath_spreads_infection", "strike_low_with_sudden_fevers"],
    aspect: [],
    aliases: [],
    set:'je'
    }; 
   
   var Earth = {     
    name: 'Vital Strength of the Earth', 
    emote: '<:SpiritVitalStrengthEarth:852365958593118269>', 
    panel: ['https://imgur.com/wgs13CF', 'https://imgur.com/5iTl68l'],      
    complexity: 1,
    title: 'Earth',
    uniques: ["draw_of_the_fruitful_earth", "guard_the_healing_land", "a_year_of_perfect_stillness", "rituals_of_destruction"],
    aliases: [],
    set:'base'
    }; 
   
   var Volcano = {     
    name: 'Volcano Looming High', 
    emote: '<:SpiritVolcanoLoomingHigh:852365959879983135>', 
    panel: ['https://imgur.com/sSs3uqa', 'https://imgur.com/XOC05vn'],      
    complexity: 2,
    title: 'Volcano',
    uniques: ["lava_flows", "exaltation_of_molten_stone", "rain_of_ash", "pyroclastic_bombardment"],
    aliases: [],
    set:'je'
    }; 
   
   // horizons spirits
   var Fathomless = {
       name: "Fathomless Mud of the Swamp",
       emote: '<:SpiritOtterFathomlessMud:1037130366345039872>',
       panel: ["https://imgur.com/n0PVQ2V","https://imgur.com/UQkHym4"],
       complexity: 1,
       title: 'Fathomless',
       uniques: ["exaltation_of_tangled_growth", "foul_vapors_and_fetid_muck", "intractable_thickets_and_thorns", "open_shifting_waterways"],
       aliases: ["otter", '🦦'],
       set:'horizons'
   };
   
   var Devouring = {
       name: "Devouring Teeth Lurk Underfoot",
       emote: '<SpiritChompDevouringTeeth:1037129924877762601>',
       panel: ["https://imgur.com/wHjhdPI", "https://imgur.com/eTvswqd"],
       complexity: 1,
       title: 'Devouring',
       uniques: ['ferocious_rampage', 'gift_of_furious_might', 'herd_towards_the_lurking_maw', 'mark_territory_with_scars_and_teeth'],
       aliases: ['chomp'],
       set:'horizons'
   };
   
   var Eyes = {
       name: "Eyes Watch From The Trees",
       emote: '<:SpiritEyesWatchTrees:1037130040053342378>',
       panel: ["https://imgur.com/zLFBZYe", "https://imgur.com/BCI4u81"],
       complexity: 1,
       title: 'Eyes',
       uniques: ['boon_of_watchful_guarding', 'eerie_noises_and_moving_trees','mysterious_abductions','whispered_guidance_through_the_night'],
       aliases: ['👀'],
       set:'horizons'
   }
   
   var Rising = {
       name: "Rising Heat of Stone and Sand",
       emote: '<:SpiritRisingHeatStoneSand:1037455831018516492>',
       panel: ["https://imgur.com/z1JoESZ","https://imgur.com/O5MYo40"],
       complexity: 1,
       title: 'Rising',
       uniques: ['call_on_herders_for_aid', 'gift_of_searing_heat', 'stinging_sandstorm', 'sweltering_exhaustion'],
       aliases: ['heat', 'stone and sand'],
       set:'horizons'
   }
   
   var SunBright = {
       name: "Sun-Bright Whirlwind",
       emote: '<:SpiritKittySunBrightWhirlwind:1037130011997655050>',
       panel: ["https://imgur.com/bTNvNzt", "https://imgur.com/MP7zaBA"],
       complexity: 1,
       title: 'SunBright',
       uniques: ['gift_of_the_sunlit_air', 'gift_of_windsped_steps', 'scatter_to_the_winds', 'tempest_of_leaves_and_branches'],
       aliases: ['whirlwind', 'kitty', 'sunkitty'],
       set:'horizons'
   }
   
   // nature incarnate spirits
   var Breath = {
       name: "Breath of Darkness Down Your Spine",
       emote: '<:SpiritBreathOfDarknessBoDDYS:1135936717879255040>',
       panel: ["https://imgur.com/dnCA76w", "https://imgur.com/FklO8qt"],
       complexity: 3,
       title: 'Breath',
       uniques: ['emerge_from_the_cold_night_wind', 'reach_from_the_infinite_darkness', 'swallowed_by_the_endless_dark', 'terror_of_the_hunted'],
       aliases: ['boddys', 'spine', 'nal'],
       set:'ni'
   }
   
   var Dances = {
       name: "Dances Up Earthquakes",
       emote: '<:SpiritDancesUpEarthquakes:1135936722623004822>',
       panel: ['https://imgur.com/ELBbtJF', 'https://imgur.com/8hR01wO'],
       complexity: 4,
       title: 'Dances',
       uniques: ['exhalation_of_echoed_steps', 'gift_of_seismic_energy', 'inspire_a_winding_dance', 'radiating_tremors', 'resounding_footfalls_sow_dismay', 'rumblings_portent_a_greater_quake'],
       aliases: ['💃','🕺'],
       set:'ni'
   }
   
   var Ember = {
       name: "Ember-Eyed Behemoth",
       emote: '<:SpiritEmberEyedBehemoth:1135936720110637177>',
       panel: ['https://imgur.com/phk0d4t', 'https://imgur.com/8431mg2'],
       complexity: 2,
       title: "Ember",
       uniques: ['blazing_intimidation', 'exhalation_of_grasping_roots', 'surging_lahar', 'terrifying_rampage'],
       aliases: ['stomp', 'eeb'],
       set:'ni'
   }
   
   var Hearth = {
       name: "Hearth-Vigil",
       emote: '<:SpiritHearthVigil:1135936715652079678>',
       panel: ['https://imgur.com/ctBCS2U', 'https://imgur.com/26T68Am'],
       complexity: 2,
       title : "Hearth",
       uniques: ['call_to_vigilance', 'coordinated_raid','favors_of_story_and_season','surrounded_by_the_dahan'],
       aliases: [],
       set:'ni'
   }
   
   var Relentless = {
       name: "Relentless Gaze of the Sun",
       emote: "<:SpiritRelentlessGaze:1135936712934183042>",
       panel: ['https://imgur.com/vb7nHtJ', 'https://imgur.com/N7WIyDi'],
       complexity : 'high',
       title: 'Relentless',
       uniques: ['blinding_glare', 'focus_the_suns_rays', 'unbearable_gaze','wither_bodies_scar_stones'],
       aliases: ['gaze','🏳️‍🌈'],
       set:'ni'
   }
   
   var Towering = {
       name: "Towering Roots of the Jungle",
       emote: '<:SpiritToweringRoots:1136003165528010752>',
       panel: ['https://imgur.com/Au4IaEs', 'https://imgur.com/FtU2Ts2'],
       complexity: 2,
       title: 'Towering',
       uniques: ['radiant_and_hallowed_grove', 'entwine_the_fates_of_all','boon_of_resilient_power','blooming_of_the_rocks_and_trees'],
       aliases: ['the tree stands tall'],
       set:'ni'
   }
   
   var Voice = {
       name: "Wandering Voice Keens Delirium",
       emote: "<:SpiritWanderingVoice:1135936709893300224>",
       panel: ['https://imgur.com/dKMG0wN', 'https://imgur.com/FzrFUYO'],
       complexity: 3,
       title: 'Voice',
       uniques: ['twist_perceptions', 'turmoils_touch','frightful_keening','exhale_confusion_and_delirium'],
       aliases: [],
       set:'ni'
   }
   
   var Wounded = {
       name: 'Wounded Waters Bleeding',
       emote: '<:SpiritWoundedWaters:1139940631414845551>',
       panel: ['https://imgur.com/hWH0aXs', 'https://imgur.com/cx2dLde'],
       complexity: 3,
       title: 'Wounded',
       uniques: ['blood_water_and_bloodlust', 'boon_of_corrupted_blood', 'draw_to_the_waters_edge', 'wrack_with_pain_and_grief'],
       aliases: ['peacewaters', 'waters renew', 'serene waters', 'roiling waters', 'waters taste of ruin'],
       set:'ni'
   }
   
   var spirits = [ 
       Green, BoDaN, Downpour, Finder, Fractured, Trickster, Wildfire, Keeper, 
       Lightning, Lure, ManyMinds, Ocean, River, Serpent, Shadows, Fangs, Memory, 
       Mist, Starlight, Stone, Thunderspeaker, Vengeance, Earth, Volcano,
       Fathomless, Devouring, Eyes, Rising, SunBright,
       Breath, Dances, Ember, Hearth, Relentless, Towering, Voice, Wounded];
   
   exports.spirits = spirits;
   
   
   