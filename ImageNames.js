/*

To update the name list:

#1. Go to https://sick.oberien.de and then type the category of cards that you want : unique, minor, major, events, etc.

#2. Use the following code in the console.

var imageList = document.querySelectorAll('.front img');
var result = [];
for(var item of imageList){
    result.push(item.src.replace(/.jpg/gi, '').replace(/https:\/\/sick.oberien.de\/imgs\/(powers|events|fears)\//gi, ''));
}
result

*/

var uniqueList = {
  'A Spread of Rampant Green': ["fields_choked_with_growth", "stem_the_flow_of_fresh_water", "gift_of_proliferation", "overgrow_in_a_night"],
  'Bringer of Dreams and Nightmares': ["call_on_midnights_dreams", "dreams_of_the_dahan", "predatory_nightmares", "dread_apparitions"],
  'Downpour Drenches the World': ["unbearable_deluge", "foundations_sink_into_mud", "gift_of_abundance", "dark_skies_loose_a_stinging_rain"],
  'Finder of Paths Unseen': ["travelers_boon", "paths_tied_by_nature", "a_circuitous_and_wending_journey", "offer_passage_between_worlds", "ways_of_shore_and_heartland", "aid_from_the_spiritspeakers"],
  'Fractured Days Split the Sky': ["the_past_returns_again", "absolute_stasis", "pour_time_sideways", "blur_the_arc_of_years"],
  'Grinning Trickster Stirs Up Trouble': ["unexpected_tigers", "impersonate_authority", "incite_the_mob", "overenthusiastic_arson"],
  'Heart of the Wildfire': ["flames_fury", "threatening_flames", "flashfires", "asphyxiating_smoke"],
  'Keeper of the Forbidden Wilds': ["regrow_from_roots", "boon_of_growing_power", "sacrosanct_wilderness", "towering_wrath"],
  'Lightning\'s Swift Strike': ["harbingers_of_the_lightning", "lightnings_boon", "shatter_homesteads", "raging_storm"],
  'Lure of the Deep Wilderness': ["gift_of_the_untamed_wild", "perils_of_the_deepest_island", "swallowed_by_the_wilderness", "softly_beckon_ever_inward"],
  'Many Minds Move as One': ["pursue_with_scratches_pecks_and_stings", "a_dreadful_tide_of_scurrying_flesh", "boon_of_swarming_bedevilment", "guide_the_way_on_feathered_wings", "evermultiplying_swarm"],
  'Ocean\'s Hungry Grasp': ["call_of_the_deeps", "swallow_the_landdwellers", "grasping_tide", "tidal_boon"],
  'River Surges in Sunlight': ["boon_of_vigor", "rivers_bounty", "wash_away", "flash_floods"],
  'Serpent Slumbering Beneath the Island': ["gift_of_the_primordial_deeps", "gift_of_flowing_power", "elemental_aegis", "absorb_essence"],
  'Shadows Flicker Like Flame': ["concealing_shadows", "favors_called_due", "mantle_of_dread", "crops_wither_and_fade"],
  'Sharp Fangs Behind the Leaves': ["too_near_the_jungle", "prey_on_the_builders", "teeth_gleam_from_darkness", "terrifying_chase"],
  'Shifting Memory of Ages': ["elemental_teachings", "share_secrets_of_survival", "study_the_invaders_fears", "boon_of_ancient_memories"],
  'Shroud of Silent Mist': ["flowing_and_silent_forms_dart_by", "the_fog_closes_in", "unnerving_pall", "dissolving_vapors"],
  'Starlight Seeks Its Form': ["gather_the_scattered_light_of_stars", "shape_the_self_anew", "boon_of_reimagining", "peace_of_the_nighttime_sky"],
  'Stone\'s Unyielding Defiance': ["jagged_shards_push_from_the_earth", "stubborn_solidity", "scarred_and_stony_land", "plows_shatter_on_rocky_ground"],
  'Thunderspeaker': ["voice_of_thunder", "words_of_warning", "sudden_ambush", "manifestation_of_power_and_glory"],
  'Vengeance as a Burning Plague': ["fiery_vengeance", "plaguebearers", "fetid_breath_spreads_infection", "strike_low_with_sudden_fevers"],
  'Vital Strength of the Earth': ["draw_of_the_fruitful_earth", "guard_the_healing_land", "a_year_of_perfect_stillness", "rituals_of_destruction"],
  'Volcano Looming High': ["lava_flows", "exaltation_of_molten_stone", "rain_of_ash", "pyroclastic_bombardment"]
}

var unique = ["harbingers_of_the_lightning", "boon_of_vigor", "rivers_bounty", "concealing_shadows", "voice_of_thunder", "call_of_the_deeps", "swallow_the_landdwellers", "call_on_midnights_dreams", "dreams_of_the_dahan", "fields_choked_with_growth", "stem_the_flow_of_fresh_water", "too_near_the_jungle", "flames_fury", "threatening_flames", "lightnings_boon", "wash_away", "favors_called_due", "mantle_of_dread", "crops_wither_and_fade", "draw_of_the_fruitful_earth", "words_of_warning", "grasping_tide", "tidal_boon", "gift_of_proliferation", "prey_on_the_builders", "teeth_gleam_from_darkness", "terrifying_chase", "regrow_from_roots", "boon_of_growing_power", "gift_of_the_primordial_deeps", "gift_of_flowing_power", "elemental_aegis", "shatter_homesteads", "flash_floods", "sudden_ambush", "predatory_nightmares", "dread_apparitions", "overgrow_in_a_night", "sacrosanct_wilderness", "flashfires", "asphyxiating_smoke", "absorb_essence", "raging_storm", "guard_the_healing_land", "a_year_of_perfect_stillness", "rituals_of_destruction", "manifestation_of_power_and_glory", "towering_wrath"];

var minor = ["savage_mawbeasts", "shadows_of_the_burning_forest", "sap_the_strength_of_multitudes", "drift_down_into_slumber", "land_of_haunts_and_embers", "call_to_isolation", "gift_of_constancy", "enticing_splendor", "gift_of_living_energy", "gift_of_power", "gnawing_rootbiters", "lure_of_the_unknown", "rain_of_blood", "reaching_grasp", "golds_allure", "here_there_be_monsters", "portents_of_disaster", "growth_through_sacrifice", "swarming_wasps", "animated_wrackroot", "promises_of_protection", "call_to_ferocity", "twilight_fog_brings_madness", "voracious_growth", "rouse_the_trees_and_stones", "encompassing_ward", "song_of_sanctity", "uncanny_melting", "steam_vents", "veil_the_nights_hunt", "elemental_boon", "devouring_ants", "dark_and_tangled_woods", "natures_resilience", "visions_of_fiery_doom", "pull_beneath_the_hungry_earth", "call_of_the_dahan_ways", "call_to_bloodshed", "call_to_migrate", "call_to_tend", "quicken_the_earths_struggles", "delusions_of_danger", "drought", "entrancing_apparitions", "purifying_flame", "inflame_the_fires_of_life", "fire_in_the_sky", "fleshrot_fever", "guardian_serpents", "infested_aquifers", "poisoned_dew", "prowling_panthers", "renewing_rain", "rites_of_the_lands_rejection", "pact_of_the_joined_hunt", "razorsharp_undergrowth", "scour_the_land", "sky_stretches_to_shore", "absorb_corruption", "call_to_trade", "confounding_mists", "cycles_of_time_and_tide", "disorienting_landscape", "elusive_ambushes", "tormenting_rotflies", "teeming_rivers", "spur_on_with_words_of_fire", "gift_of_the_primordial_deeps"];

var major = ["call_on_midnights_dreams", "the_trees_and_stones_speak_of_war", "entwined_power", "flow_like_water_reach_like_air", "savage_transformation", "tigers_hunting", "poisoned_land", "powerstorm", "the_jungle_hungers", "vigor_of_the_breaking_dawn", "vengeance_of_the_dead", "wrap_in_wings_of_sunlight", "winds_of_rust_and_atrophy", "infinite_vitality", "pentup_calamity", "pyroclastic_flow", "smothering_infestation", "accelerated_rot", "terrifying_nightmares", "paralyzing_fright", "the_land_thrashes_in_furious_pain", "indomitable_claim", "mists_of_oblivion", "dissolve_the_bonds_of_kinship", "strangling_firevine", "bloodwrack_plague", "death_falls_gently_from_open_blossoms", "grant_hatred_a_ravenous_form", "insatiable_hunger_of_the_swarm", "instruments_of_their_own_ruin", "unrelenting_growth", "sweep_into_the_sea", "unlock_the_gates_of_deepest_power", "cleansing_floods", "pillar_of_living_flame", "blazing_renewal", "sea_monsters", "twisted_flowers_murmur_ultimatums", "talons_of_lightning", "tsunami", "manifest_incarnation", "fire_and_flood", "volcanic_eruption", "cast_down_into_the_briny_deep"];

var fear = ["fear_of_the_unseen", "scapegoats", "emigration_accelerates", "dahan_on_their_guard", "tall_tales_of_savagery", "retreat", "dahan_raid", "dahan_enheartened", "avoid_the_dahan", "seek_safety", "wary_of_the_interior", "belief_takes_root", "isolation", "overseas_trade_seems_safer", "trade_suffers", "demoralized", "plan_for_departure", "tread_carefully", "dahan_attack", "explorers_are_reluctant", "immigration_slows", "flee_the_pestilent_land", "quarantine", "too_many_monsters", "panicked_by_wild_beasts", "depart_the_dangerous_land", "unrest", "panic", "discord", "dahan_threaten"];

var event = ["years_of_little_rain", "farmers_seek_the_dahan_for_aid", "new_species_spread", "war_touches_the_islands_shores", "sacred_sites_under_threat", "outpaced", "missionaries_arrive", "a_strange_madness_among_the_beasts", "seeking_the_interior", "wave_of_reconnaissance", "interesting_discoveries", "strange_tales_attract_explorers", "cultural_assimilation", "investigation_of_dangers", "distant_exploration", "rising_interest_in_the_island", "putting_down_roots", "search_for_new_lands", "invaders_surge_inland", "tightknit_communities", "wellprepared_explorers", "population_rises", "urban_development", "heavy_farming", "promising_farmland", "slave_rebellion"];

exports.unique = unique;
exports.minor = minor;
exports.major = major;
exports.power = [].concat(unique).concat(minor).concat(major);
exports.fear = fear;
exports.event = event;