import { racerCall } from "./racerCall";

export const abort_all_queries = (key_args) => {
  return String(racerCall("abort-all-queries", key_args));
};

export const abort_all_queries_ = (key_args) => {
  return racerCall("abort-all-queries", key_args);
};

export const abort_all_rules = (key_args) => {
  return String(racerCall("abort-all-rules", key_args));
};

export const abort_all_rules_ = (key_args) => {
  return racerCall("abort-all-rules", key_args);
};

export const abort_query = (query) => {
  return String(racerCall("abort-query", query));
};

export const abort_query_ = (query) => {
  return racerCall("abort-query", query);
};
export const abort_rule = (query) => {
  return String(racerCall("abort-rule", query));
};
export const abort_rule_ = (query) => {
  return racerCall("abort-rule", query);
};
export const abox_consistent_if_assertions_added_p = (abox, assertions) => {
  return Boolean(
    racerCall("abox-consistent-if-assertions-added-p", abox, assertions)
  );
};
export const abox_consistent_p = (abox) => {
  return Boolean(racerCall("abox-consistent-p", abox));
};
export const abox_entails_abox_p = (a, b, tbox) => {
  return Boolean(racerCall("abox-entails-abox-p", a, b, tbox));
};
export const abox_prepared_p = (abox) => {
  return Boolean(racerCall("abox-prepared-p", abox));
};
export const abox_realized_p = (abox) => {
  return Boolean(racerCall("abox-realized-p", abox));
};
export const abox_una_consistent_p = (abox) => {
  return Boolean(racerCall("abox-una-consistent-p", abox));
};
export const accurate_queries = (key_args) => {
  return String(racerCall("accurate-queries", key_args));
};
export const accurate_queries_ = (key_args) => {
  return racerCall("accurate-queries", key_args);
};
export const accurate_rules = (key_args) => {
  return String(racerCall("accurate-rules", key_args));
};
export const accurate_rules_ = (key_args) => {
  return racerCall("accurate-rules", key_args);
};
export const activate_defined_query = (key_args) => {
  return String(racerCall("activate-defined-query", key_args));
};
export const activate_defined_query_ = (key_args) => {
  return racerCall("activate-defined-query", key_args);
};
export const active_queries = (key_args) => {
  return String(racerCall("active-queries", key_args));
};
export const active_queries_ = (key_args) => {
  return racerCall("active-queries", key_args);
};
export const active_rules = (key_args) => {
  return String(racerCall("active-rules", key_args));
};
export const active_rules_ = (key_args) => {
  return racerCall("active-rules", key_args);
};
export const add_all_different_assertion = (abox, individual_name_set) => {
  return String(
    racerCall("add-all-different-assertion", abox, individual_name_set)
  );
};
export const add_all_different_assertion_ = (abox, individual_name_set) => {
  return racerCall("add-all-different-assertion", abox, individual_name_set);
};
export const add_annotation_concept_assertion = (
  abox,
  individual_name,
  concept
) => {
  return String(
    racerCall(
      "add-annotation-concept-assertion",
      abox,
      individual_name,
      concept
    )
  );
};
export const add_annotation_concept_assertion_ = (
  abox,
  individual_name,
  concept
) => {
  return racerCall(
    "add-annotation-concept-assertion",
    abox,
    individual_name,
    concept
  );
};
export const add_annotation_role_assertion = (
  abox,
  predecessor_name,
  filler_name,
  role_term
) => {
  return String(
    racerCall(
      "add-annotation-role-assertion",
      abox,
      predecessor_name,
      filler_name,
      role_term
    )
  );
};
export const add_annotation_role_assertion_ = (
  abox,
  predecessor_name,
  filler_name,
  role_term
) => {
  return racerCall(
    "add-annotation-role-assertion",
    abox,
    predecessor_name,
    filler_name,
    role_term
  );
};
export const add_attribute_assertion = (
  abox,
  individual,
  object_,
  attribute
) => {
  return String(
    racerCall("add-attribute-assertion", abox, individual, object_, attribute)
  );
};
export const add_attribute_assertion_ = (
  abox,
  individual,
  object_,
  attribute
) => {
  return racerCall(
    "add-attribute-assertion",
    abox,
    individual,
    object_,
    attribute
  );
};
export const add_chosen_sets_of_rule_consequences = (key_args) => {
  return String(racerCall("add-chosen-sets-of-rule-consequences", key_args));
};
export const add_chosen_sets_of_rule_consequences_ = (key_args) => {
  return racerCall("add-chosen-sets-of-rule-consequences", key_args);
};
export const add_concept_assertion = (abox, individual_name, concept) => {
  return String(
    racerCall("add-concept-assertion", abox, individual_name, concept)
  );
};
export const add_concept_assertion_ = (abox, individual_name, concept) => {
  return racerCall("add-concept-assertion", abox, individual_name, concept);
};
export const add_concept_axiom = (key_args) => {
  return String(racerCall("add-concept-axiom", key_args));
};
export const add_concept_axiom_ = (key_args) => {
  return racerCall("add-concept-axiom", key_args);
};
export const add_constraint_assertion = (abox, constraint) => {
  return String(racerCall("add-constraint-assertion", abox, constraint));
};
export const add_constraint_assertion_ = (abox, constraint) => {
  return racerCall("add-constraint-assertion", abox, constraint);
};
export const add_datatype_property = (key_args) => {
  return String(racerCall("add-datatype-property", key_args));
};
export const add_datatype_property_ = (key_args) => {
  return racerCall("add-datatype-property", key_args);
};
export const add_datatype_role_filler = (abox, individual, value, role) => {
  return String(
    racerCall("add-datatype-role-filler", abox, individual, value, role)
  );
};
export const add_datatype_role_filler_ = (abox, individual, value, role) => {
  return racerCall(
    "add-datatype-role-filler",
    abox,
    individual,
    value,
    role,
    role
  );
};
export const add_different_from_assertion = (
  abox,
  individual_name1,
  individual_name2
) => {
  return String(
    racerCall(
      "add-different-from-assertion",
      abox,
      individual_name1,
      individual_name2
    )
  );
};
export const add_different_from_assertion_ = (
  abox,
  individual_name1,
  individual_name2
) => {
  return racerCall(
    "add-different-from-assertion",
    abox,
    individual_name1,
    individual_name2
  );
};
export const add_disjointness_axiom = (
  tbox,
  concept_name,
  group_name,
  form
) => {
  return String(
    racerCall("add-disjointness-axiom", tbox, concept_name, group_name, form)
  );
};
export const add_disjointness_axiom_ = (tbox, concept_name, group_name) => {
  return racerCall("add-disjointness-axiom", tbox, concept_name, group_name);
};
export const add_doc_entry1 = () => {
  return String(racerCall("add-doc-entry1"));
};
export const add_doc_entry1_ = () => {
  return racerCall("add-doc-entry1");
};
export const add_doc_image_data_from_file1 = (url, type_, pathname) => {
  return String(
    racerCall("add-doc-image-data-from-file1", url, type_, pathname)
  );
};
export const add_doc_image_data_from_file1_ = (url, type_, pathname) => {
  return racerCall("add-doc-image-data-from-file1", url, type_, pathname);
};
export const add_doc_image_data1 = (url, type_, bytes_) => {
  return String(racerCall("add-doc-image-data1", url, type_, bytes_));
};
export const add_doc_image_data1_ = (url, type_, bytes_) => {
  return racerCall("add-doc-image-data1", url, type_, bytes_);
};
export const add_doc_image_file1 = (url, type_, pathname) => {
  return String(racerCall("add-doc-image-file1", url, type_, pathname));
};
export const add_doc_image_file1_ = (url, type_, pathname) => {
  return racerCall("add-doc-image-file1", url, type_, pathname);
};
export const add_doc_phrase1 = (label, string) => {
  return String(racerCall("add-doc-phrase1", label, string));
};
export const add_doc_phrase1_ = (label, string) => {
  return racerCall("add-doc-phrase1", label, string);
};
export const add_event_assertion = (assertion, abox) => {
  return String(racerCall("add-event-assertion", assertion, abox));
};
export const add_event_assertion_ = (assertion, abox) => {
  return racerCall("add-event-assertion", assertion, abox);
};
export const add_event_rule = (head, body, abox) => {
  return String(racerCall("add-event-rule", head, body, abox));
};
export const add_event_rule_ = (head, body, abox) => {
  return racerCall("add-event-rule", head, body, abox);
};
export const add_explanation_assertions = (key_args) => {
  return String(racerCall("add-explanation-assertions", key_args));
};
export const add_explanation_assertions_ = (key_args) => {
  return racerCall("add-explanation-assertions", key_args);
};
export const add_missing_top_conjuncts = () => {
  return String(racerCall("add-missing-top-conjuncts"));
};
export const add_missing_top_conjuncts_ = () => {
  return racerCall("add-missing-top-conjuncts");
};
export const add_negated_role_assertion = (
  abox,
  predecessor_name,
  filler_name,
  role_term
) => {
  return String(
    racerCall(
      "add-negated-role-assertion",
      abox,
      predecessor_name,
      filler_name,
      role_term
    )
  );
};
export const add_negated_role_assertion_ = (
  abox,
  predecessor_name,
  filler_name,
  role_term
) => {
  return racerCall(
    "add-negated-role-assertion",
    abox,
    predecessor_name,
    filler_name,
    role_term
  );
};
export const add_negative_datatype_role_filler = (
  abox,
  individual,
  value,
  role,
  type_
) => {
  return String(
    racerCall(
      "add-negative-datatype-role-filler",
      abox,
      individual,
      value,
      role,
      type_
    )
  );
};
export const add_negative_datatype_role_filler_ = (
  abox,
  individual,
  value,
  role,
  type_
) => {
  return racerCall(
    "add-negative-datatype-role-filler",
    abox,
    individual,
    value,
    role,
    type_
  );
};
export const add_prefix = (prefix, mapping) => {
  return String(racerCall("add-prefix", prefix, mapping));
};
export const add_prefix_ = (prefix, mapping) => {
  return racerCall("add-prefix", prefix, mapping);
};
export const add_role_assertion = (
  abox,
  predecessor_name,
  filler_name,
  role_term
) => {
  return String(
    racerCall(
      "add-role-assertion",
      abox,
      predecessor_name,
      filler_name,
      role_term
    )
  );
};
export const add_role_assertion_ = (
  abox,
  predecessor_name,
  filler_name,
  role_term
) => {
  return racerCall(
    "add-role-assertion",
    abox,
    predecessor_name,
    filler_name,
    role_term
  );
};
export const add_role_assertions_for_datatype_properties = () => {
  return String(racerCall("add-role-assertions-for-datatype-properties"));
};
export const add_role_assertions_for_datatype_properties_ = () => {
  return racerCall("add-role-assertions-for-datatype-properties");
};
export const add_role_axiom = (key_args) => {
  return String(racerCall("add-role-axiom", key_args));
};
export const add_role_axiom_ = (key_args) => {
  return racerCall("add-role-axiom", key_args);
};
export const add_role_axioms = (key_args) => {
  return String(racerCall("add-role-axioms", key_args));
};
export const add_role_axioms_ = (key_args) => {
  return racerCall("add-role-axioms", key_args);
};
export const add_rule_axiom = (key_args) => {
  return String(racerCall("add-rule-axiom", key_args));
};
export const add_rule_axiom_ = (abox, lefthand_side, righthand_side) => {
  return racerCall("add-rule-axiom", abox, lefthand_side, righthand_side);
};
export const add_rule_consequences_automatically = () => {
  return String(racerCall("add-rule-consequences-automatically"));
};
export const add_rule_consequences_automatically_ = () => {
  return racerCall("add-rule-consequences-automatically");
};
export const add_same_individual_as_assertion = (
  abox,
  individual_name1,
  individual_name2
) => {
  return String(
    racerCall(
      "add-same-individual-as-assertion",
      abox,
      individual_name1,
      individual_name2
    )
  );
};
export const add_same_individual_as_assertion_ = (
  abox,
  individual_name1,
  individual_name2
) => {
  return racerCall(
    "add-same-individual-as-assertion",
    abox,
    individual_name1,
    individual_name2
  );
};
export const alc_concept_coherent = (key_args) => {
  return String(racerCall("alc-concept-coherent", key_args));
};
export const alc_concept_coherent_ = (key_args) => {
  return racerCall("alc-concept-coherent", key_args);
};
export const all_aboxes = () => {
  return String(racerCall("all-aboxes"));
};
export const all_aboxes_ = () => {
  return racerCall("all-aboxes");
};
export const all_annotation_concept_assertions = (key_args) => {
  return String(racerCall("all-annotation-concept-assertions", key_args));
};
export const all_annotation_concept_assertions_ = (key_args) => {
  return racerCall("all-annotation-concept-assertions", key_args);
};
export const all_annotation_role_assertions = (key_args) => {
  return String(racerCall("all-annotation-role-assertions", key_args));
};
export const all_annotation_role_assertions_ = (key_args) => {
  return racerCall("all-annotation-role-assertions", key_args);
};
export const all_atomic_concepts = (key_args) => {
  return String(racerCall("all-atomic-concepts", key_args));
};
export const all_atomic_concepts_ = (key_args) => {
  return racerCall("all-atomic-concepts", key_args);
};
export const all_attribute_assertions = (key_args) => {
  return String(racerCall("all-attribute-assertions", key_args));
};
export const all_attribute_assertions_ = (key_args) => {
  return racerCall("all-attribute-assertions", key_args);
};
export const all_attributes = (key_args) => {
  return String(racerCall("all-attributes", key_args));
};
export const all_attributes_ = (key_args) => {
  return racerCall("all-attributes", key_args);
};
export const all_concept_assertions = (key_args) => {
  return String(racerCall("all-concept-assertions", key_args));
};
export const all_concept_assertions_ = (key_args) => {
  return racerCall("all-concept-assertions", key_args);
};
export const all_concept_assertions_for_individual = (key_args) => {
  return String(racerCall("all-concept-assertions-for-individual", key_args));
};
export const all_concept_assertions_for_individual_ = (individual, abox) => {
  return racerCall("all-concept-assertions-for-individual", individual, abox);
};
export const all_constraints = (key_args) => {
  return String(racerCall("all-constraints", key_args));
};
export const all_constraints_ = (key_args) => {
  return racerCall("all-constraints", key_args);
};
export const all_different_from_assertions = (key_args) => {
  return String(racerCall("all-different-from-assertions", key_args));
};
export const all_different_from_assertions_ = (key_args) => {
  return racerCall("all-different-from-assertions", key_args);
};
export const all_equivalent_concepts = (key_args) => {
  return String(racerCall("all-equivalent-concepts", key_args));
};
export const all_equivalent_concepts_ = (key_args) => {
  return racerCall("all-equivalent-concepts", key_args);
};
export const all_features = (key_args) => {
  return String(racerCall("all-features", key_args));
};
export const all_features_ = (key_args) => {
  return racerCall("all-features", key_args);
};
export const all_individuals = (key_args) => {
  return String(racerCall("all-individuals", key_args));
};
export const all_individuals_ = (key_args) => {
  return racerCall("all-individuals", key_args);
};
export const all_queries = (key_args) => {
  return String(racerCall("all-queries", key_args));
};
export const all_queries_ = (key_args) => {
  return racerCall("all-queries", key_args);
};
export const all_role_assertions = (key_args) => {
  return String(racerCall("all-role-assertions", key_args));
};
export const all_role_assertions_ = (key_args) => {
  return racerCall("all-role-assertions", key_args);
};
export const all_role_assertions_for_individual_in_domain = (key_args) => {
  return String(
    racerCall("all-role-assertions-for-individual-in-domain", key_args)
  );
};
export const all_role_assertions_for_individual_in_domain_ = (
  individual,
  abox
) => {
  return racerCall(
    "all-role-assertions-for-individual-in-domain",
    individual,
    abox
  );
};
export const all_role_assertions_for_individual_in_range = (key_args) => {
  return String(
    racerCall("all-role-assertions-for-individual-in-range", key_args)
  );
};
export const all_role_assertions_for_individual_in_range_ = (
  individual,
  abox
) => {
  return racerCall(
    "all-role-assertions-for-individual-in-range",
    individual,
    abox
  );
};
export const all_roles = (key_args) => {
  return String(racerCall("all-roles", key_args));
};
export const all_roles_ = (key_args) => {
  return racerCall("all-roles", key_args);
};
export const all_rules = (key_args) => {
  return String(racerCall("all-rules", key_args));
};
export const all_rules_ = (key_args) => {
  return racerCall("all-rules", key_args);
};
export const all_same_as_assertions = (key_args) => {
  return String(racerCall("all-same-as-assertions", key_args));
};
export const all_same_as_assertions_ = (key_args) => {
  return racerCall("all-same-as-assertions", key_args);
};
export const all_substrates = (key_args) => {
  return String(racerCall("all-substrates", key_args));
};
export const all_substrates_ = (key_args) => {
  return racerCall("all-substrates", key_args);
};
export const all_tboxes = () => {
  return String(racerCall("all-tboxes"));
};
export const all_tboxes_ = () => {
  return racerCall("all-tboxes");
};
export const all_transitive_roles = (key_args) => {
  return String(racerCall("all-transitive-roles", key_args));
};
export const all_transitive_roles_ = (key_args) => {
  return racerCall("all-transitive-roles", key_args);
};
export const allow_overloaded_definitions = () => {
  return String(racerCall("allow-overloaded-definitions"));
};
export const allow_overloaded_definitions_ = () => {
  return racerCall("allow-overloaded-definitions");
};
export const answer_query = (key_args) => {
  return String(racerCall("answer-query", key_args));
};
export const answer_query_ = (key_args) => {
  return racerCall("answer-query", key_args);
};
export const answer_query_under_premise = (key_args) => {
  return String(racerCall("answer-query-under-premise", key_args));
};
export const answer_query_under_premise_ = (key_args) => {
  return racerCall("answer-query-under-premise", key_args);
};
export const answer_query_under_premise1 = (key_args) => {
  return String(racerCall("answer-query-under-premise1", key_args));
};
export const answer_query_under_premise1_ = (key_args) => {
  return racerCall("answer-query-under-premise1", key_args);
};
export const answer_query1 = (key_args) => {
  return String(racerCall("answer-query1", key_args));
};
export const answer_query1_ = (key_args) => {
  return racerCall("answer-query1", key_args);
};
export const answer_tbox_query = (key_args) => {
  return String(racerCall("answer-tbox-query", key_args));
};
export const answer_tbox_query_ = (key_args) => {
  return racerCall("answer-tbox-query", key_args);
};
export const answer_tbox_query1 = (key_args) => {
  return String(racerCall("answer-tbox-query1", key_args));
};
export const answer_tbox_query1_ = (key_args) => {
  return racerCall("answer-tbox-query1", key_args);
};
export const applicable_rules = (key_args) => {
  return String(racerCall("applicable-rules", key_args));
};
export const applicable_rules_ = (key_args) => {
  return racerCall("applicable-rules", key_args);
};
export const apply_rule = (key_args) => {
  return String(racerCall("apply-rule", key_args));
};
export const apply_rule_ = (key_args) => {
  return racerCall("apply-rule", key_args);
};
export const apply_rule_under_premise = (key_args) => {
  return String(racerCall("apply-rule-under-premise", key_args));
};
export const apply_rule_under_premise_ = (key_args) => {
  return racerCall("apply-rule-under-premise", key_args);
};
export const apply_rule_under_premise1 = (key_args) => {
  return String(racerCall("apply-rule-under-premise1", key_args));
};
export const apply_rule_under_premise1_ = (key_args) => {
  return racerCall("apply-rule-under-premise1", key_args);
};
export const associated_aboxes = (tbox) => {
  return String(racerCall("associated-aboxes", tbox));
};
export const associated_aboxes_ = (tbox) => {
  return racerCall("associated-aboxes", tbox);
};
export const associated_tbox = (abox) => {
  return String(racerCall("associated-tbox", abox));
};
export const associated_tbox_ = (abox) => {
  return racerCall("associated-tbox", abox);
};
export const asymmetric_p = (role_term, tbox) => {
  return Boolean(racerCall("asymmetric-p", role_term, tbox));
};
export const atomic_concept_ancestors = (concept_term, tbox) => {
  return String(racerCall("atomic-concept-ancestors", concept_term, tbox));
};
export const atomic_concept_ancestors_ = (concept_term, tbox) => {
  return racerCall("atomic-concept-ancestors", concept_term, tbox);
};
export const atomic_concept_children = (concept_term, tbox) => {
  return String(racerCall("atomic-concept-children", concept_term, tbox));
};
export const atomic_concept_children_ = (concept_term, tbox) => {
  return racerCall("atomic-concept-children", concept_term, tbox);
};
export const atomic_concept_descendants = (concept_term, tbox) => {
  return String(racerCall("atomic-concept-descendants", concept_term, tbox));
};
export const atomic_concept_descendants_ = (concept_term, tbox) => {
  return racerCall("atomic-concept-descendants", concept_term, tbox);
};
export const atomic_concept_parents = (concept_term, tbox) => {
  return String(racerCall("atomic-concept-parents", concept_term, tbox));
};
export const atomic_concept_parents_ = (concept_term, tbox) => {
  return racerCall("atomic-concept-parents", concept_term, tbox);
};
export const atomic_concept_synonyms = (concept_term, tbox) => {
  return String(racerCall("atomic-concept-synonyms", concept_term, tbox));
};
export const atomic_concept_synonyms_ = (concept_term, tbox) => {
  return racerCall("atomic-concept-synonyms", concept_term, tbox);
};
export const atomic_role_ancestors = (role_term, tbox) => {
  return String(racerCall("atomic-role-ancestors", role_term, tbox));
};
export const atomic_role_ancestors_ = (role_term, tbox) => {
  return racerCall("atomic-role-ancestors", role_term, tbox);
};
export const atomic_role_children = (key_args) => {
  return String(racerCall("atomic-role-children", key_args));
};
export const atomic_role_children_ = (key_args) => {
  return racerCall("atomic-role-children", key_args);
};
export const atomic_role_descendants = (role_term, tbox) => {
  return String(racerCall("atomic-role-descendants", role_term, tbox));
};
export const atomic_role_descendants_ = (role_term, tbox) => {
  return racerCall("atomic-role-descendants", role_term, tbox);
};
export const atomic_role_domain = (role_term, tbox) => {
  return String(racerCall("atomic-role-domain", role_term, tbox));
};
export const atomic_role_domain_ = (role_term, tbox) => {
  return racerCall("atomic-role-domain", role_term, tbox);
};
export const atomic_role_inverse = (role_term, tbox) => {
  return String(racerCall("atomic-role-inverse", role_term, tbox));
};
export const atomic_role_inverse_ = (role_term, tbox) => {
  return racerCall("atomic-role-inverse", role_term, tbox);
};
export const atomic_role_parents = (key_args) => {
  return String(racerCall("atomic-role-parents", key_args));
};
export const atomic_role_parents_ = (key_args) => {
  return racerCall("atomic-role-parents", key_args);
};
export const atomic_role_range = (role_term, tbox) => {
  return String(racerCall("atomic-role-range", role_term, tbox));
};
export const atomic_role_range_ = (role_term, tbox) => {
  return racerCall("atomic-role-range", role_term, tbox);
};
export const atomic_role_synonyms = (role_term, tbox) => {
  return String(racerCall("atomic-role-synonyms", role_term, tbox));
};
export const atomic_role_synonyms_ = (role_term, tbox) => {
  return racerCall("atomic-role-synonyms", role_term, tbox);
};
export const attribute_domain1 = (attribute_name, tbox) => {
  return String(racerCall("attribute-domain-1", attribute_name, tbox));
};
export const attribute_domain1_ = (attribute_name, tbox) => {
  return racerCall("attribute-domain-1", attribute_name, tbox);
};
export const attribute_type = (attribute_name, tbox) => {
  return String(racerCall("attribute-type", attribute_name, tbox));
};
export const attribute_type_ = (attribute_name, tbox) => {
  return racerCall("attribute-type", attribute_name, tbox);
};
export const cd_attribute_p = (attribute, tbox) => {
  return Boolean(racerCall("cd-attribute-p", attribute, tbox));
};
export const cd_object_p = (object_name, abox) => {
  return Boolean(racerCall("cd-object-p", object_name, abox));
};
export const cheap_queries = (key_args) => {
  return String(racerCall("cheap-queries", key_args));
};
export const cheap_queries_ = (key_args) => {
  return racerCall("cheap-queries", key_args);
};
export const cheap_query_p = (query) => {
  return Boolean(racerCall("cheap-query-p", query));
};
export const cheap_rule_p = (query) => {
  return Boolean(racerCall("cheap-rule-p", query));
};
export const cheap_rules = (key_args) => {
  return String(racerCall("cheap-rules", key_args));
};
export const cheap_rules_ = (key_args) => {
  return racerCall("cheap-rules", key_args);
};
export const check_abox_coherence = (abox, filename_or_stream) => {
  return String(racerCall("check-abox-coherence", abox, filename_or_stream));
};
export const check_abox_coherence_ = (abox, filename_or_stream) => {
  return racerCall("check-abox-coherence", abox, filename_or_stream);
};
export const check_abox_consistency_before_querying = () => {
  return String(racerCall("check-abox-consistency-before-querying"));
};
export const check_abox_consistency_before_querying_ = () => {
  return racerCall("check-abox-consistency-before-querying");
};
export const check_concept_coherence = (concept, tbox) => {
  return String(racerCall("check-concept-coherence", concept, tbox));
};
export const check_concept_coherence_ = (concept, tbox) => {
  return racerCall("check-concept-coherence", concept, tbox);
};
export const check_for_updates = (key_args) => {
  return String(racerCall("check-for-updates", key_args));
};
export const check_for_updates_ = (key_args) => {
  return racerCall("check-for-updates", key_args);
};
export const check_nrql_subscriptions = (abox) => {
  return String(racerCall("check-nrql-subscriptions", abox));
};
export const check_nrql_subscriptions_ = (abox) => {
  return racerCall("check-nrql-subscriptions", abox);
};
export const check_ontology = (key_args) => {
  return String(racerCall("check-ontology", key_args));
};
export const check_ontology_ = (key_args) => {
  return racerCall("check-ontology", key_args);
};
export const check_subscriptions = (abox) => {
  return String(racerCall("check-subscriptions", abox));
};
export const check_subscriptions_ = (abox) => {
  return racerCall("check-subscriptions", abox);
};
export const check_tbox_coherence = (key_args) => {
  return String(racerCall("check-tbox-coherence", key_args));
};
export const check_tbox_coherence_ = (key_args) => {
  return racerCall("check-tbox-coherence", key_args);
};
export const choose_current_set_of_rule_consequences = (query) => {
  return String(racerCall("choose-current-set-of-rule-consequences", query));
};
export const choose_current_set_of_rule_consequences_ = (query) => {
  return racerCall("choose-current-set-of-rule-consequences", query);
};
export const classify_query = (query) => {
  return String(racerCall("classify-query", query));
};
export const classify_query_ = (query) => {
  return racerCall("classify-query", query);
};
export const classify_tbox = (tbox) => {
  return String(racerCall("classify-tbox", tbox));
};
export const classify_tbox_ = (tbox) => {
  return racerCall("classify-tbox", tbox);
};
export const clear_all_documentation = () => {
  return String(racerCall("clear-all-documentation"));
};
export const clear_all_documentation_ = () => {
  return racerCall("clear-all-documentation");
};
export const clear_default_tbox = () => {
  return String(racerCall("clear-default-tbox"));
};
export const clear_default_tbox_ = () => {
  return racerCall("clear-default-tbox");
};
export const close_triple_store = (key_args) => {
  return String(racerCall("close-triple-store", key_args));
};
export const close_triple_store_ = (key_args) => {
  return racerCall("close-triple-store", key_args);
};
export const compute_abox_difference1 = (key_args) => {
  return String(racerCall("compute-abox-difference1", key_args));
};
export const compute_abox_difference1_ = (key_args) => {
  return racerCall("compute-abox-difference1", key_args);
};
export const compute_abox_difference2 = (key_args) => {
  return String(racerCall("compute-abox-difference2", key_args));
};
export const compute_abox_difference2_ = (key_args) => {
  return racerCall("compute-abox-difference2", key_args);
};
export const compute_all_implicit_role_fillers = (abox) => {
  return String(racerCall("compute-all-implicit-role-fillers", abox));
};
export const compute_all_implicit_role_fillers_ = (abox) => {
  return racerCall("compute-all-implicit-role-fillers", abox);
};
export const compute_implicit_role_fillers = (individual_name, abox) => {
  return String(
    racerCall("compute-implicit-role-fillers", individual_name, abox)
  );
};
export const compute_implicit_role_fillers_ = (individual_name, abox) => {
  return racerCall("compute-implicit-role-fillers", individual_name, abox);
};
export const compute_index_for_instance_retrieval = (abox) => {
  return String(racerCall("compute-index-for-instance-retrieval", abox));
};
export const compute_index_for_instance_retrieval_ = (abox) => {
  return racerCall("compute-index-for-instance-retrieval", abox);
};
export const compute_subgraph_aboxes = (abox_or_name) => {
  return String(racerCall("compute-subgraph-aboxes", abox_or_name));
};
export const compute_subgraph_aboxes_ = (abox_or_name) => {
  return racerCall("compute-subgraph-aboxes", abox_or_name);
};
export const concept_disjoint_p = (concept1, concept2, tbox) => {
  return Boolean(racerCall("concept-disjoint-p", concept1, concept2, tbox));
};
export const concept_equivalent_p = (concept1, concept2, tbox) => {
  return Boolean(racerCall("concept-equivalent-p", concept1, concept2, tbox));
};
export const concept_is_primitive_p = (concept_name, tbox) => {
  return Boolean(racerCall("concept-is-primitive-p", concept_name, tbox));
};
export const concept_p = (concept_name, tbox) => {
  return Boolean(racerCall("concept-p", concept_name, tbox));
};
export const concept_satisfiable_p = (concept_term, tbox) => {
  return Boolean(racerCall("concept-satisfiable-p", concept_term, tbox));
};
export const concept_subsumes_p = (subsumer, subsumee, tbox) => {
  return Boolean(racerCall("concept-subsumes-p", subsumer, subsumee, tbox));
};
export const constraint_entailed_p = (constraint, abox) => {
  return Boolean(racerCall("constraint-entailed-p", constraint, abox));
};
export const convert_event_specs = (in_file, out_file) => {
  return String(racerCall("convert-event-specs", in_file, out_file));
};
export const convert_event_specs_ = (in_file, out_file) => {
  return racerCall("convert-event-specs", in_file, out_file);
};
export const copy_rules = (key_args) => {
  return String(racerCall("copy-rules", key_args));
};
export const copy_rules_ = (key_args) => {
  return racerCall("copy-rules", key_args);
};
export const create_abox_clone = (key_args) => {
  return String(racerCall("create-abox-clone", key_args));
};
export const create_abox_clone_ = (key_args) => {
  return racerCall("create-abox-clone", key_args);
};
export const create_data_edge = (key_args) => {
  return String(racerCall("create-data-edge", key_args));
};
export const create_data_edge_ = (key_args) => {
  return racerCall("create-data-edge", key_args);
};
export const create_data_node = (key_args) => {
  return String(racerCall("create-data-node", key_args));
};
export const create_data_node_ = (key_args) => {
  return racerCall("create-data-node", key_args);
};
export const create_rcc_edge = (key_args) => {
  return String(racerCall("create-rcc-edge", key_args));
};
export const create_rcc_edge_ = (key_args) => {
  return racerCall("create-rcc-edge", key_args);
};
export const create_rcc_node = (key_args) => {
  return String(racerCall("create-rcc-node", key_args));
};
export const create_rcc_node_ = (key_args) => {
  return racerCall("create-rcc-node", key_args);
};
export const create_subgraph_aboxes = (abox_or_name, new_name, tbox) => {
  return String(
    racerCall("create-subgraph-aboxes", abox_or_name, new_name, tbox)
  );
};
export const create_subgraph_aboxes_ = (abox_or_name, new_name, tbox) => {
  return racerCall("create-subgraph-aboxes", abox_or_name, new_name, tbox);
};
export const create_tbox_clone = (key_args) => {
  return String(racerCall("create-tbox-clone", key_args));
};
export const create_tbox_clone_ = (key_args) => {
  return racerCall("create-tbox-clone", key_args);
};
export const create_tbox_internal_marker_concept = (tbox, marker_name) => {
  return String(
    racerCall("create-tbox-internal-marker-concept", tbox, marker_name)
  );
};
export const create_tbox_internal_marker_concept_ = (tbox, marker_name) => {
  return racerCall("create-tbox-internal-marker-concept", tbox, marker_name);
};
export const create_triple_store = (key_args) => {
  return String(racerCall("create-triple-store", key_args));
};
export const create_triple_store_ = (key_args) => {
  return racerCall("create-triple-store", key_args);
};
export const current_abox = () => {
  return String(racerCall("current-abox"));
};
export const current_abox_ = () => {
  return racerCall("current-abox");
};
export const current_tbox = () => {
  return String(racerCall("current-tbox"));
};
export const current_tbox_ = () => {
  return racerCall("current-tbox");
};
export const data_edge1 = (from_, to, data_relation, racer_descr, abox) => {
  return String(
    racerCall("data-edge1", from_, to, data_relation, racer_descr, abox)
  );
};
export const data_edge1_ = (from_, to, data_relation, abox, racer_descr) => {
  return racerCall("data-edge1", from_, to, data_relation, abox, racer_descr);
};
export const data_node1 = (name, descr, racer_descr, abox) => {
  return String(racerCall("data-node1", name, descr, racer_descr, abox));
};
export const data_node1_ = (name, descr, racer_descr, abox) => {
  return racerCall("data-node1", name, descr, racer_descr, abox);
};
export const datatype_role_has_range = (rolename, range, tbox) => {
  return String(racerCall("datatype-role-has-range", rolename, range, tbox));
};
export const datatype_role_has_range_ = (rolename, range, tbox) => {
  return racerCall("datatype-role-has-range", rolename, range, tbox);
};
export const datatype_role_range = (role_name, tbox) => {
  return String(racerCall("datatype-role-range", role_name, tbox));
};
export const datatype_role_range_ = (role_name, tbox) => {
  return racerCall("datatype-role-range", role_name, tbox);
};
export const deactivate_defined_query = (key_args) => {
  return String(racerCall("deactivate-defined-query", key_args));
};
export const deactivate_defined_query_ = (key_args) => {
  return racerCall("deactivate-defined-query", key_args);
};
export const declare_current_knowledge_bases_as_persistent = () => {
  return String(racerCall("declare-current-knowledge-bases-as-persistent"));
};
export const declare_current_knowledge_bases_as_persistent_ = () => {
  return racerCall("declare-current-knowledge-bases-as-persistent");
};
export const declare_disjoint = (concepts, tbox) => {
  return String(racerCall("declare-disjoint", concepts, tbox));
};
export const declare_disjoint_ = (concepts, tbox) => {
  return racerCall("declare-disjoint", concepts, tbox);
};
export const defcon1 = (name, value) => {
  return String(racerCall("defcon1", name, value));
};
export const defcon1_ = (name, value) => {
  return racerCall("defcon1", name, value);
};
export const define_and_execute_query = (key_args) => {
  return String(racerCall("define-and-execute-query", key_args));
};
export const define_and_execute_query_ = (key_args) => {
  return racerCall("define-and-execute-query", key_args);
};
export const define_and_prepare_query = (key_args) => {
  return String(racerCall("define-and-prepare-query", key_args));
};
export const define_and_prepare_query_ = (key_args) => {
  return racerCall("define-and-prepare-query", key_args);
};
export const define_query = (key_args) => {
  return String(racerCall("define-query", key_args));
};
export const define_query_ = (key_args) => {
  return racerCall("define-query", key_args);
};
export const define1 = (name, arglist) => {
  return String(racerCall("define1", name, arglist));
};
export const define1_ = (name, arglist) => {
  return racerCall("define1", name, arglist);
};
export const defpar1 = (name, value) => {
  return String(racerCall("defpar1", name, value));
};
export const defpar1_ = (name, value) => {
  return racerCall("defpar1", name, value);
};
export const del_data_edge1 = (from_, to, abox, type_of_substrate) => {
  return String(
    racerCall("del-data-edge1", from_, to, abox, type_of_substrate)
  );
};
export const del_data_edge1_ = (from_, to, abox, type_of_substrate) => {
  return racerCall("del-data-edge1", from_, to, abox, type_of_substrate);
};
export const del_data_node1 = (name, abox, type_of_substrate) => {
  return String(racerCall("del-data-node1", name, abox, type_of_substrate));
};
export const del_data_node1_ = (name, abox, type_of_substrate) => {
  return racerCall("del-data-node1", name, abox, type_of_substrate);
};
export const del_doc_entry1 = (label) => {
  return String(racerCall("del-doc-entry1", label));
};
export const del_doc_entry1_ = (label) => {
  return racerCall("del-doc-entry1", label);
};
export const del_rcc_edge1 = () => {
  return String(racerCall("del-rcc-edge1"));
};
export const del_rcc_edge1_ = () => {
  return racerCall("del-rcc-edge1");
};
export const del_rcc_node1 = () => {
  return String(racerCall("del-rcc-node1"));
};
export const del_rcc_node1_ = () => {
  return racerCall("del-rcc-node1");
};
export const delete_all_aboxes = () => {
  return String(racerCall("delete-all-aboxes"));
};
export const delete_all_aboxes_ = () => {
  return racerCall("delete-all-aboxes");
};
export const delete_all_definitions = (key_args) => {
  return String(racerCall("delete-all-definitions", key_args));
};
export const delete_all_definitions_ = (key_args) => {
  return racerCall("delete-all-definitions", key_args);
};
export const delete_all_queries = (key_args) => {
  return String(racerCall("delete-all-queries", key_args));
};
export const delete_all_queries_ = (key_args) => {
  return racerCall("delete-all-queries", key_args);
};
export const delete_all_rules = (key_args) => {
  return String(racerCall("delete-all-rules", key_args));
};
export const delete_all_rules_ = (key_args) => {
  return racerCall("delete-all-rules", key_args);
};
export const delete_all_substrates = (key_args) => {
  return String(racerCall("delete-all-substrates", key_args));
};
export const delete_all_substrates_ = (key_args) => {
  return racerCall("delete-all-substrates", key_args);
};
export const delete_all_tboxes = () => {
  return String(racerCall("delete-all-tboxes"));
};
export const delete_all_tboxes_ = () => {
  return racerCall("delete-all-tboxes");
};
export const delete_data_edge = (key_args) => {
  return String(racerCall("delete-data-edge", key_args));
};
export const delete_data_edge_ = (key_args) => {
  return racerCall("delete-data-edge", key_args);
};
export const delete_data_node = (key_args) => {
  return String(racerCall("delete-data-node", key_args));
};
export const delete_data_node_ = (key_args) => {
  return racerCall("delete-data-node", key_args);
};
export const delete_prefix_mappings = () => {
  return String(racerCall("delete-prefix-mappings"));
};
export const delete_prefix_mappings_ = () => {
  return racerCall("delete-prefix-mappings");
};
export const delete_query = (query) => {
  return String(racerCall("delete-query", query));
};
export const delete_query_ = (query) => {
  return racerCall("delete-query", query);
};
export const delete_rcc_synonyms = () => {
  return String(racerCall("delete-rcc-synonyms"));
};
export const delete_rcc_synonyms_ = () => {
  return racerCall("delete-rcc-synonyms");
};
export const delete_rule = (query) => {
  return String(racerCall("delete-rule", query));
};
export const delete_rule_ = (query) => {
  return racerCall("delete-rule", query);
};
export const describe_abox = (abox, stream) => {
  return String(racerCall("describe-abox", abox, stream));
};
export const describe_abox_ = (abox, stream) => {
  return racerCall("describe-abox", abox, stream);
};
export const describe_all_definitions = (key_args) => {
  return String(racerCall("describe-all-definitions", key_args));
};
export const describe_all_definitions_ = (key_args) => {
  return racerCall("describe-all-definitions", key_args);
};
export const describe_all_edges = (key_args) => {
  return String(racerCall("describe-all-edges", key_args));
};
export const describe_all_edges_ = (key_args) => {
  return racerCall("describe-all-edges", key_args);
};
export const describe_all_nodes = (key_args) => {
  return String(racerCall("describe-all-nodes", key_args));
};
export const describe_all_nodes_ = (key_args) => {
  return racerCall("describe-all-nodes", key_args);
};
export const describe_all_queries = (key_args) => {
  return String(racerCall("describe-all-queries", key_args));
};
export const describe_all_queries_ = (key_args) => {
  return racerCall("describe-all-queries", key_args);
};
export const describe_all_rules = (key_args) => {
  return String(racerCall("describe-all-rules", key_args));
};
export const describe_all_rules_ = (key_args) => {
  return racerCall("describe-all-rules", key_args);
};
export const describe_all_substrates = () => {
  return String(racerCall("describe-all-substrates"));
};
export const describe_all_substrates_ = () => {
  return racerCall("describe-all-substrates");
};
export const describe_concept = (concept_name, tbox, stream) => {
  return String(racerCall("describe-concept", concept_name, tbox, stream));
};
export const describe_concept_ = (concept_name, tbox, stream) => {
  return racerCall("describe-concept", concept_name, tbox, stream);
};
export const describe_current_substrate = () => {
  return String(racerCall("describe-current-substrate"));
};
export const describe_current_substrate_ = () => {
  return racerCall("describe-current-substrate");
};
export const describe_definition = (key_args) => {
  return String(racerCall("describe-definition", key_args));
};
export const describe_definition_ = (key_args) => {
  return racerCall("describe-definition", key_args);
};
export const describe_individual = (individual_name, abox, stream) => {
  return String(
    racerCall("describe-individual", individual_name, abox, stream)
  );
};
export const describe_individual_ = (individual_name, abox, stream) => {
  return racerCall("describe-individual", individual_name, abox, stream);
};
export const describe_individual1 = (individual_name, abox, stream) => {
  return String(
    racerCall("describe-individual1", individual_name, abox, stream)
  );
};
export const describe_individual1_ = (individual_name, abox, stream) => {
  return racerCall("describe-individual1", individual_name, abox, stream);
};
export const describe_query = (query, rewritten_p) => {
  return String(racerCall("describe-query", query, rewritten_p));
};
export const describe_query_ = (query, rewritten_p) => {
  return racerCall("describe-query", query, rewritten_p);
};
export const describe_query_processing_mode = () => {
  return String(racerCall("describe-query-processing-mode"));
};
export const describe_query_processing_mode_ = () => {
  return racerCall("describe-query-processing-mode");
};
export const describe_query_status = (query) => {
  return String(racerCall("describe-query-status", query));
};
export const describe_query_status_ = (query) => {
  return racerCall("describe-query-status", query);
};
export const describe_role = (role_term, tbox, stream) => {
  return String(racerCall("describe-role", role_term, tbox, stream));
};
export const describe_role_ = (role_term, tbox, stream) => {
  return racerCall("describe-role", role_term, tbox, stream);
};
export const describe_rule = (query, rewritten_p) => {
  return String(racerCall("describe-rule", query, rewritten_p));
};
export const describe_rule_ = (query, rewritten_p) => {
  return racerCall("describe-rule", query, rewritten_p);
};
export const describe_rule_status = (query) => {
  return String(racerCall("describe-rule-status", query));
};
export const describe_rule_status_ = (query) => {
  return racerCall("describe-rule-status", query);
};
export const describe_substrate = (key_args) => {
  return String(racerCall("describe-substrate", key_args));
};
export const describe_substrate_ = (key_args) => {
  return racerCall("describe-substrate", key_args);
};
export const describe_tbox = (tbox, stream) => {
  return String(racerCall("describe-tbox", tbox, stream));
};
export const describe_tbox_ = (tbox, stream) => {
  return racerCall("describe-tbox", tbox, stream);
};
export const description_implies_p = (a, b) => {
  return Boolean(racerCall("description-implies-p", a, b));
};
export const dig_read_document = (url_spec, kb_name, init) => {
  return String(racerCall("dig-read-document", url_spec, kb_name, init));
};
export const dig_read_document_ = (url_spec, kb_name, init) => {
  return racerCall("dig-read-document", url_spec, kb_name, init);
};
export const dig_read_file = (key_args) => {
  return String(racerCall("dig-read-file", key_args));
};
export const dig_read_file_ = (key_args) => {
  return racerCall("dig-read-file", key_args);
};
export const disable_abduction = (key_args) => {
  return String(racerCall("disable-abduction", key_args));
};
export const disable_abduction_ = (key_args) => {
  return racerCall("disable-abduction", key_args);
};
export const disable_abox_mirroring = () => {
  return String(racerCall("disable-abox-mirroring"));
};
export const disable_abox_mirroring_ = () => {
  return racerCall("disable-abox-mirroring");
};
export const disable_data_substrate_mirroring = () => {
  return String(racerCall("disable-data-substrate-mirroring"));
};
export const disable_data_substrate_mirroring_ = () => {
  return racerCall("disable-data-substrate-mirroring");
};
export const disable_defined_queries = () => {
  return String(racerCall("disable-defined-queries"));
};
export const disable_defined_queries_ = () => {
  return racerCall("disable-defined-queries");
};
export const disable_kb_has_changed_warning_tokens = () => {
  return String(racerCall("disable-kb-has-changed-warning-tokens"));
};
export const disable_kb_has_changed_warning_tokens_ = () => {
  return racerCall("disable-kb-has-changed-warning-tokens");
};
export const disable_lazy_unfolding_of_defined_queries = () => {
  return String(racerCall("disable-lazy-unfolding-of-defined-queries"));
};
export const disable_lazy_unfolding_of_defined_queries_ = () => {
  return racerCall("disable-lazy-unfolding-of-defined-queries");
};
export const disable_nrql_warnings = () => {
  return String(racerCall("disable-nrql-warnings"));
};
export const disable_nrql_warnings_ = () => {
  return racerCall("disable-nrql-warnings");
};
export const disable_phase_two_starts_warning_tokens = () => {
  return String(racerCall("disable-phase-two-starts-warning-tokens"));
};
export const disable_phase_two_starts_warning_tokens_ = () => {
  return racerCall("disable-phase-two-starts-warning-tokens");
};
export const disable_query_optimization = () => {
  return String(racerCall("disable-query-optimization"));
};
export const disable_query_optimization_ = () => {
  return racerCall("disable-query-optimization");
};
export const disable_query_realization = () => {
  return String(racerCall("disable-query-realization"));
};
export const disable_query_realization_ = () => {
  return racerCall("disable-query-realization");
};
export const disable_query_repository = () => {
  return String(racerCall("disable-query-repository"));
};
export const disable_query_repository_ = () => {
  return racerCall("disable-query-repository");
};
export const disable_rcc_substrate_mirroring = () => {
  return String(racerCall("disable-rcc-substrate-mirroring"));
};
export const disable_rcc_substrate_mirroring_ = () => {
  return racerCall("disable-rcc-substrate-mirroring");
};
export const disable_told_information_querying = () => {
  return String(racerCall("disable-told-information-querying"));
};
export const disable_told_information_querying_ = () => {
  return racerCall("disable-told-information-querying");
};
export const disable_two_phase_query_processing_mode = () => {
  return String(racerCall("disable-two-phase-query-processing-mode"));
};
export const disable_two_phase_query_processing_mode_ = () => {
  return racerCall("disable-two-phase-query-processing-mode");
};
export const dont_add_missing_top_conjuncts = () => {
  return String(racerCall("dont-add-missing-top-conjuncts"));
};
export const dont_add_missing_top_conjuncts_ = () => {
  return racerCall("dont-add-missing-top-conjuncts");
};
export const dont_add_role_assertions_for_datatype_properties = () => {
  return String(racerCall("dont-add-role-assertions-for-datatype-properties"));
};
export const dont_add_role_assertions_for_datatype_properties_ = () => {
  return racerCall("dont-add-role-assertions-for-datatype-properties");
};
export const dont_add_rule_consequences_automatically = () => {
  return String(racerCall("dont-add-rule-consequences-automatically"));
};
export const dont_add_rule_consequences_automatically_ = () => {
  return racerCall("dont-add-rule-consequences-automatically");
};
export const dont_allow_overloaded_definitions = () => {
  return String(racerCall("dont-allow-overloaded-definitions"));
};
export const dont_allow_overloaded_definitions_ = () => {
  return racerCall("dont-allow-overloaded-definitions");
};
export const dont_check_abox_consistency_before_querying = () => {
  return String(racerCall("dont-check-abox-consistency-before-querying"));
};
export const dont_check_abox_consistency_before_querying_ = () => {
  return racerCall("dont-check-abox-consistency-before-querying");
};
export const dont_keep_defined_query_atoms = () => {
  return String(racerCall("dont-keep-defined-query-atoms"));
};
export const dont_keep_defined_query_atoms_ = () => {
  return racerCall("dont-keep-defined-query-atoms");
};
export const dont_prefer_defined_queries = () => {
  return String(racerCall("dont-prefer-defined-queries"));
};
export const dont_prefer_defined_queries_ = () => {
  return racerCall("dont-prefer-defined-queries");
};
export const dont_report_inconsistent_queries_and_rules = () => {
  return String(racerCall("dont-report-inconsistent-queries-and-rules"));
};
export const dont_report_inconsistent_queries_and_rules_ = () => {
  return racerCall("dont-report-inconsistent-queries-and-rules");
};
export const dont_use_individual_synonym_equivalence_classes = () => {
  return String(racerCall("dont-use-individual-synonym-equivalence-classes"));
};
export const dont_use_individual_synonym_equivalence_classes_ = () => {
  return racerCall("dont-use-individual-synonym-equivalence-classes");
};
export const dont_use_injective_variables_by_default = () => {
  return String(racerCall("dont-use-injective-variables-by-default"));
};
export const dont_use_injective_variables_by_default_ = () => {
  return racerCall("dont-use-injective-variables-by-default");
};
export const edge_description1 = (from_, to, abox, type_of_substrate) => {
  return String(
    racerCall("edge-description1", from_, to, abox, type_of_substrate)
  );
};
export const edge_description1_ = (from_, to, abox, type_of_substrate) => {
  return racerCall("edge-description1", from_, to, abox, type_of_substrate);
};
export const edge_label1 = (from_, to, abox, type_of_substrate) => {
  return String(racerCall("edge-label1", from_, to, abox, type_of_substrate));
};
export const edge_label1_ = (from_, to, abox, type_of_substrate) => {
  return racerCall("edge-label1", from_, to, abox, type_of_substrate);
};
export const enable_abduction = (key_args) => {
  return String(racerCall("enable-abduction", key_args));
};
export const enable_abduction_ = (key_args) => {
  return racerCall("enable-abduction", key_args);
};
export const enable_abox_mirroring = () => {
  return String(racerCall("enable-abox-mirroring"));
};
export const enable_abox_mirroring_ = () => {
  return racerCall("enable-abox-mirroring");
};
export const enable_data_substrate_mirroring = () => {
  return String(racerCall("enable-data-substrate-mirroring"));
};
export const enable_data_substrate_mirroring_ = () => {
  return racerCall("enable-data-substrate-mirroring");
};
export const enable_defined_queries = () => {
  return String(racerCall("enable-defined-queries"));
};
export const enable_defined_queries_ = () => {
  return racerCall("enable-defined-queries");
};
export const enable_eager_tuple_computation = () => {
  return String(racerCall("enable-eager-tuple-computation"));
};
export const enable_eager_tuple_computation_ = () => {
  return racerCall("enable-eager-tuple-computation");
};
export const enable_kb_has_changed_warning_tokens = () => {
  return String(racerCall("enable-kb-has-changed-warning-tokens"));
};
export const enable_kb_has_changed_warning_tokens_ = () => {
  return racerCall("enable-kb-has-changed-warning-tokens");
};
export const enable_lazy_tuple_computation = () => {
  return String(racerCall("enable-lazy-tuple-computation"));
};
export const enable_lazy_tuple_computation_ = () => {
  return racerCall("enable-lazy-tuple-computation");
};
export const enable_lazy_unfolding_of_defined_queries = () => {
  return String(racerCall("enable-lazy-unfolding-of-defined-queries"));
};
export const enable_lazy_unfolding_of_defined_queries_ = () => {
  return racerCall("enable-lazy-unfolding-of-defined-queries");
};
export const enable_nrql_warnings = () => {
  return String(racerCall("enable-nrql-warnings"));
};
export const enable_nrql_warnings_ = () => {
  return racerCall("enable-nrql-warnings");
};
export const enable_optimized_query_processing = (
  rewrite_concept_definitions
) => {
  return String(
    racerCall("enable-optimized-query-processing", rewrite_concept_definitions)
  );
};
export const enable_optimized_query_processing_ = (
  rewrite_concept_definitions
) => {
  return racerCall(
    "enable-optimized-query-processing",
    rewrite_concept_definitions
  );
};
export const enable_phase_two_starts_warning_tokens = () => {
  return String(racerCall("enable-phase-two-starts-warning-tokens"));
};
export const enable_phase_two_starts_warning_tokens_ = () => {
  return racerCall("enable-phase-two-starts-warning-tokens");
};
export const enable_query_optimization = () => {
  return String(racerCall("enable-query-optimization"));
};
export const enable_query_optimization_ = () => {
  return racerCall("enable-query-optimization");
};
export const enable_query_realization = () => {
  return String(racerCall("enable-query-realization"));
};
export const enable_query_realization_ = () => {
  return racerCall("enable-query-realization");
};
export const enable_query_repository = () => {
  return String(racerCall("enable-query-repository"));
};
export const enable_query_repository_ = () => {
  return racerCall("enable-query-repository");
};
export const enable_rcc_substrate_mirroring = () => {
  return String(racerCall("enable-rcc-substrate-mirroring"));
};
export const enable_rcc_substrate_mirroring_ = () => {
  return racerCall("enable-rcc-substrate-mirroring");
};
export const enable_smart_abox_mirroring = () => {
  return String(racerCall("enable-smart-abox-mirroring"));
};
export const enable_smart_abox_mirroring_ = () => {
  return racerCall("enable-smart-abox-mirroring");
};
export const enable_told_information_querying = () => {
  return String(racerCall("enable-told-information-querying"));
};
export const enable_told_information_querying_ = () => {
  return racerCall("enable-told-information-querying");
};
export const enable_two_phase_query_processing_mode = () => {
  return String(racerCall("enable-two-phase-query-processing-mode"));
};
export const enable_two_phase_query_processing_mode_ = () => {
  return racerCall("enable-two-phase-query-processing-mode");
};
export const enable_very_smart_abox_mirroring = () => {
  return String(racerCall("enable-very-smart-abox-mirroring"));
};
export const enable_very_smart_abox_mirroring_ = () => {
  return racerCall("enable-very-smart-abox-mirroring");
};
export const ensure_abox_signature = (key_args) => {
  return String(racerCall("ensure-abox-signature", key_args));
};
export const ensure_abox_signature_ = (key_args) => {
  return racerCall("ensure-abox-signature", key_args);
};
export const ensure_subsumption_based_query_answering = (abox) => {
  return String(racerCall("ensure-subsumption-based-query-answering", abox));
};
export const ensure_subsumption_based_query_answering_ = (abox) => {
  return racerCall("ensure-subsumption-based-query-answering", abox);
};
export const ensure_tbox_signature = (key_args) => {
  return String(racerCall("ensure-tbox-signature", key_args));
};
export const ensure_tbox_signature_ = (key_args) => {
  return racerCall("ensure-tbox-signature", key_args);
};
export const exclude_permutations = () => {
  return String(racerCall("exclude-permutations"));
};
export const exclude_permutations_ = () => {
  return racerCall("exclude-permutations");
};
export const execute_all_queries = (key_args) => {
  return String(racerCall("execute-all-queries", key_args));
};
export const execute_all_queries_ = (key_args) => {
  return racerCall("execute-all-queries", key_args);
};
export const execute_all_rules = (key_args) => {
  return String(racerCall("execute-all-rules", key_args));
};
export const execute_all_rules_ = (key_args) => {
  return racerCall("execute-all-rules", key_args);
};
export const execute_applicable_rules = (key_args) => {
  return String(racerCall("execute-applicable-rules", key_args));
};
export const execute_applicable_rules_ = (key_args) => {
  return racerCall("execute-applicable-rules", key_args);
};
export const execute_or_reexecute_all_queries = (key_args) => {
  return String(racerCall("execute-or-reexecute-all-queries", key_args));
};
export const execute_or_reexecute_all_queries_ = (key_args) => {
  return racerCall("execute-or-reexecute-all-queries", key_args);
};
export const execute_or_reexecute_all_rules = (key_args) => {
  return String(racerCall("execute-or-reexecute-all-rules", key_args));
};
export const execute_or_reexecute_all_rules_ = (key_args) => {
  return racerCall("execute-or-reexecute-all-rules", key_args);
};
export const execute_or_reexecute_query = (key_args) => {
  return String(racerCall("execute-or-reexecute-query", key_args));
};
export const execute_or_reexecute_query_ = (key_args) => {
  return racerCall("execute-or-reexecute-query", key_args);
};
export const execute_or_reexecute_rule = (query) => {
  return String(racerCall("execute-or-reexecute-rule", query));
};
export const execute_or_reexecute_rule_ = (query) => {
  return racerCall("execute-or-reexecute-rule", query);
};
export const execute_query = (key_args) => {
  return String(racerCall("execute-query", key_args));
};
export const execute_query_ = (key_args) => {
  return racerCall("execute-query", key_args);
};
export const execute_rule = (query) => {
  return String(racerCall("execute-rule", query));
};
export const execute_rule_ = (query) => {
  return racerCall("execute-rule", query);
};
export const expensive_queries = (key_args) => {
  return String(racerCall("expensive-queries", key_args));
};
export const expensive_queries_ = (key_args) => {
  return racerCall("expensive-queries", key_args);
};
export const expensive_query_p = (query) => {
  return Boolean(racerCall("expensive-query-p", query));
};
export const expensive_rule_p = (query) => {
  return Boolean(racerCall("expensive-rule-p", query));
};
export const expensive_rules = (key_args) => {
  return String(racerCall("expensive-rules", key_args));
};
export const expensive_rules_ = (key_args) => {
  return racerCall("expensive-rules", key_args);
};
export const fcall = (name) => {
  return String(racerCall("fcall", name));
};
export const fcall_ = (name) => {
  return racerCall("fcall", name);
};
export const feature_p = (role_term, tbox) => {
  return Boolean(racerCall("feature-p", role_term, tbox));
};
export const find_abox = (abox_name_or_abox, errorp) => {
  return String(racerCall("find-abox", abox_name_or_abox, errorp));
};
export const find_abox_ = (abox_name_or_abox, errorp) => {
  return racerCall("find-abox", abox_name_or_abox, errorp);
};
export const find_tbox = (tbox, errorp) => {
  return String(racerCall("find-tbox", tbox, errorp));
};
export const find_tbox_ = (tbox, errorp) => {
  return racerCall("find-tbox", tbox, errorp);
};
export const forget_abox = (abox) => {
  return String(racerCall("forget-abox", abox));
};
export const forget_abox_ = (abox) => {
  return racerCall("forget-abox", abox);
};
export const forget_all_different_assertion = (abox, individual_name_set) => {
  return String(
    racerCall("forget-all-different-assertion", abox, individual_name_set)
  );
};
export const forget_all_different_assertion_ = (abox, individual_name_set) => {
  return racerCall("forget-all-different-assertion", abox, individual_name_set);
};
export const forget_annotation_concept_assertion = (
  abox,
  individual_name,
  concept
) => {
  return String(
    racerCall(
      "forget-annotation-concept-assertion",
      abox,
      individual_name,
      concept
    )
  );
};
export const forget_annotation_concept_assertion_ = (
  abox,
  individual_name,
  concept
) => {
  return racerCall(
    "forget-annotation-concept-assertion",
    abox,
    individual_name,
    concept
  );
};
export const forget_concept_assertion = (abox, individual_name, concept) => {
  return String(
    racerCall("forget-concept-assertion", abox, individual_name, concept)
  );
};
export const forget_concept_assertion_ = (abox, individual_name, concept) => {
  return racerCall("forget-concept-assertion", abox, individual_name, concept);
};
export const forget_concept_axiom = (key_args) => {
  return String(racerCall("forget-concept-axiom", key_args));
};
export const forget_concept_axiom_ = (key_args) => {
  return racerCall("forget-concept-axiom", key_args);
};
export const forget_constrained_assertion = (
  abox,
  individual_name,
  object_name,
  attribute_term
) => {
  return String(
    racerCall(
      "forget-constrained-assertion",
      abox,
      individual_name,
      object_name,
      attribute_term
    )
  );
};
export const forget_constrained_assertion_ = (
  abox,
  individual_name,
  object_name,
  attribute_term
) => {
  return racerCall(
    "forget-constrained-assertion",
    abox,
    individual_name,
    object_name,
    attribute_term
  );
};
export const forget_constraint = (abox, constraint) => {
  return String(racerCall("forget-constraint", abox, constraint));
};
export const forget_constraint_ = (abox, constraint) => {
  return racerCall("forget-constraint", abox, constraint);
};
export const forget_datatype_role_filler = (abox, individual, value, role) => {
  return String(
    racerCall("forget-datatype-role-filler", abox, individual, value, role)
  );
};
export const forget_datatype_role_filler_ = (abox, individual, value, role) => {
  return racerCall(
    "forget-datatype-role-filler",
    abox,
    individual,
    value,
    role
  );
};
export const forget_different_from_assertion = (
  abox,
  individual1,
  individual2
) => {
  return String(
    racerCall("forget-different-from-assertion", abox, individual1, individual2)
  );
};
export const forget_different_from_assertion_ = (
  abox,
  individual1,
  individual2
) => {
  return racerCall(
    "forget-different-from-assertion",
    abox,
    individual1,
    individual2
  );
};
export const forget_disjointness_axiom = (
  tbox,
  concept_name,
  group_name,
  form
) => {
  return String(
    racerCall("forget-disjointness-axiom", tbox, concept_name, group_name, form)
  );
};
export const forget_disjointness_axiom_ = (tbox, concept_name, group_name) => {
  return racerCall("forget-disjointness-axiom", tbox, concept_name, group_name);
};
export const forget_disjointness_axiom_statement = (tbox, concepts) => {
  return String(
    racerCall("forget-disjointness-axiom-statement", tbox, concepts)
  );
};
export const forget_disjointness_axiom_statement_ = (tbox, concepts) => {
  return racerCall("forget-disjointness-axiom-statement", tbox, concepts);
};
export const forget_individual = (individual, abox) => {
  return String(racerCall("forget-individual", individual, abox));
};
export const forget_individual_ = (individual, abox) => {
  return racerCall("forget-individual", individual, abox);
};
export const forget_negated_role_assertion = (
  abox,
  predecessor_name,
  filler_name,
  role_term
) => {
  return String(
    racerCall(
      "forget-negated-role-assertion",
      abox,
      predecessor_name,
      filler_name,
      role_term
    )
  );
};
export const forget_negated_role_assertion_ = (
  abox,
  predecessor_name,
  filler_name,
  role_term
) => {
  return racerCall(
    "forget-negated-role-assertion",
    abox,
    predecessor_name,
    filler_name,
    role_term
  );
};
export const forget_negative_datatype_role_filler = (
  abox,
  individual,
  value,
  role
) => {
  return String(
    racerCall(
      "forget-negative-datatype-role-filler",
      abox,
      individual,
      value,
      role
    )
  );
};
export const forget_negative_datatype_role_filler_ = (
  abox,
  individual,
  value,
  role
) => {
  return racerCall(
    "forget-negative-datatype-role-filler",
    abox,
    individual,
    value,
    role
  );
};
export const forget_role_assertion = (
  abox,
  predecessor_name,
  filler_name,
  role_term
) => {
  return String(
    racerCall(
      "forget-role-assertion",
      abox,
      predecessor_name,
      filler_name,
      role_term
    )
  );
};
export const forget_role_assertion_ = (
  abox,
  predecessor_name,
  filler_name,
  role_term
) => {
  return racerCall(
    "forget-role-assertion",
    abox,
    predecessor_name,
    filler_name,
    role_term
  );
};
export const forget_role_axioms = (key_args) => {
  return String(racerCall("forget-role-axioms", key_args));
};
export const forget_role_axioms_ = (key_args) => {
  return racerCall("forget-role-axioms", key_args);
};
export const forget_same_individual_as_assertion = (
  abox,
  individual1,
  individual2
) => {
  return String(
    racerCall(
      "forget-same-individual-as-assertion",
      abox,
      individual1,
      individual2
    )
  );
};
export const forget_same_individual_as_assertion_ = (
  abox,
  individual1,
  individual2
) => {
  return racerCall(
    "forget-same-individual-as-assertion",
    abox,
    individual1,
    individual2
  );
};
export const forget_statement = (tbox, abox, assertions) => {
  return String(racerCall("forget-statement", tbox, abox, assertions));
};
export const forget_statement_ = (tbox, abox, assertions) => {
  return racerCall("forget-statement", tbox, abox, assertions);
};
export const forget_tbox = (tbox) => {
  return String(racerCall("forget-tbox", tbox));
};
export const forget_tbox_ = (tbox) => {
  return racerCall("forget-tbox", tbox);
};
export const full_reset = () => {
  return String(racerCall("full-reset"));
};
export const full_reset_ = () => {
  return racerCall("full-reset");
};
export const get_abox_graph = (key_args) => {
  return String(racerCall("get-abox-graph", key_args));
};
export const get_abox_graph_ = (key_args) => {
  return racerCall("get-abox-graph", key_args);
};
export const get_abox_language = (abox) => {
  return String(racerCall("get-abox-language", abox));
};
export const get_abox_language_ = (abox) => {
  return racerCall("get-abox-language", abox);
};
export const get_abox_signature = (abox) => {
  return String(racerCall("get-abox-signature", abox));
};
export const get_abox_signature_ = (abox) => {
  return racerCall("get-abox-signature", abox);
};
export const get_abox_version = (abox) => {
  return String(racerCall("get-abox-version", abox));
};
export const get_abox_version_ = (abox) => {
  return racerCall("get-abox-version", abox);
};
export const get_agraph_version = () => {
  return String(racerCall("get-agraph-version"));
};
export const get_agraph_version_ = () => {
  return racerCall("get-agraph-version");
};
export const get_all_answers = (key_args) => {
  return String(racerCall("get-all-answers", key_args));
};
export const get_all_answers_ = (key_args) => {
  return racerCall("get-all-answers", key_args);
};
export const get_all_functions = () => {
  return String(racerCall("get-all-functions"));
};
export const get_all_functions_ = () => {
  return racerCall("get-all-functions");
};
export const get_all_remaining_sets_of_rule_consequences = (query) => {
  return String(
    racerCall("get-all-remaining-sets-of-rule-consequences", query)
  );
};
export const get_all_remaining_sets_of_rule_consequences_ = (query) => {
  return racerCall("get-all-remaining-sets-of-rule-consequences", query);
};
export const get_all_remaining_tuples = (key_args) => {
  return String(racerCall("get-all-remaining-tuples", key_args));
};
export const get_all_remaining_tuples_ = (key_args) => {
  return racerCall("get-all-remaining-tuples", key_args);
};
export const get_all_server_functions = () => {
  return String(racerCall("get-all-server-functions"));
};
export const get_all_server_functions_ = () => {
  return racerCall("get-all-server-functions");
};
export const get_all_server_values = () => {
  return String(racerCall("get-all-server-values"));
};
export const get_all_server_values_ = () => {
  return racerCall("get-all-server-values");
};
export const get_all_values = () => {
  return String(racerCall("get-all-values"));
};
export const get_all_values_ = () => {
  return racerCall("get-all-values");
};
export const get_answer = (key_args) => {
  return String(racerCall("get-answer", key_args));
};
export const get_answer_ = (key_args) => {
  return racerCall("get-answer", key_args);
};
export const get_answer_size = (key_args) => {
  return String(racerCall("get-answer-size", key_args));
};
export const get_answer_size_ = (key_args) => {
  return racerCall("get-answer-size", key_args);
};
export const get_build_version = () => {
  return String(racerCall("get-build-version"));
};
export const get_build_version_ = () => {
  return racerCall("get-build-version");
};
export const get_chosen_sets_of_rule_consequences = (query) => {
  return String(racerCall("get-chosen-sets-of-rule-consequences", query));
};
export const get_chosen_sets_of_rule_consequences_ = (query) => {
  return racerCall("get-chosen-sets-of-rule-consequences", query);
};
export const get_concept_definition1 = (concept_name, tbox) => {
  return String(racerCall("get-concept-definition-1", concept_name, tbox));
};
export const get_concept_definition1_ = (concept_name, tbox) => {
  return racerCall("get-concept-definition-1", concept_name, tbox);
};
export const get_concept_negated_definition1 = (concept_name, tbox) => {
  return String(
    racerCall("get-concept-negated-definition-1", concept_name, tbox)
  );
};
export const get_concept_negated_definition1_ = (concept_name, tbox) => {
  return racerCall("get-concept-negated-definition-1", concept_name, tbox);
};
export const get_concept_pmodel = (concept_expr, tbox) => {
  return String(racerCall("get-concept-pmodel", concept_expr, tbox));
};
export const get_concept_pmodel_ = (concept_expr, tbox) => {
  return racerCall("get-concept-pmodel", concept_expr, tbox);
};
export const get_concept_properties = (key_args) => {
  return String(racerCall("get-concept-properties", key_args));
};
export const get_concept_properties_ = (key_args) => {
  return racerCall("get-concept-properties", key_args);
};
export const get_current_set_of_rule_consequences = (query) => {
  return String(racerCall("get-current-set-of-rule-consequences", query));
};
export const get_current_set_of_rule_consequences_ = (query) => {
  return racerCall("get-current-set-of-rule-consequences", query);
};
export const get_current_tuple = (query) => {
  return String(racerCall("get-current-tuple", query));
};
export const get_current_tuple_ = (query) => {
  return racerCall("get-current-tuple", query);
};
export const get_dag_of_qbox_for_abox = (abox) => {
  return String(racerCall("get-dag-of-qbox-for-abox", abox));
};
export const get_dag_of_qbox_for_abox_ = (abox) => {
  return racerCall("get-dag-of-qbox-for-abox", abox);
};
export const get_data_bottom_role = (tbox) => {
  return String(racerCall("get-data-bottom-role", tbox));
};
export const get_data_bottom_role_ = (tbox) => {
  return racerCall("get-data-bottom-role", tbox);
};
export const get_data_edge_description = (key_args) => {
  return String(racerCall("get-data-edge-description", key_args));
};
export const get_data_edge_description_ = (key_args) => {
  return racerCall("get-data-edge-description", key_args);
};
export const get_data_edge_label = (key_args) => {
  return String(racerCall("get-data-edge-label", key_args));
};
export const get_data_edge_label_ = (key_args) => {
  return racerCall("get-data-edge-label", key_args);
};
export const get_data_node_description = (key_args) => {
  return String(racerCall("get-data-node-description", key_args));
};
export const get_data_node_description_ = (key_args) => {
  return racerCall("get-data-node-description", key_args);
};
export const get_data_node_label = (key_args) => {
  return String(racerCall("get-data-node-label", key_args));
};
export const get_data_node_label_ = (key_args) => {
  return racerCall("get-data-node-label", key_args);
};
export const get_edge_label_for_non_existent_edges = (key_args) => {
  return String(racerCall("get-edge-label-for-non-existent-edges", key_args));
};
export const get_edge_label_for_non_existent_edges_ = (key_args) => {
  return racerCall("get-edge-label-for-non-existent-edges", key_args);
};
export const get_explanations = (key_args) => {
  return String(racerCall("get-explanations", key_args));
};
export const get_explanations_ = (key_args) => {
  return racerCall("get-explanations", key_args);
};
export const get_individual_annotation_datatype_fillers = (
  individual_name,
  abox
) => {
  return String(
    racerCall(
      "get-individual-annotation-datatype-fillers",
      individual_name,
      abox
    )
  );
};
export const get_individual_annotation_datatype_fillers_ = (
  individual_name,
  abox
) => {
  return racerCall(
    "get-individual-annotation-datatype-fillers",
    individual_name,
    abox
  );
};
export const get_individual_annotation_fillers = (individual_name, abox) => {
  return String(
    racerCall("get-individual-annotation-fillers", individual_name, abox)
  );
};
export const get_individual_annotation_fillers_ = (individual_name, abox) => {
  return racerCall("get-individual-annotation-fillers", individual_name, abox);
};
export const get_individual_datatype_fillers = (
  individual_name,
  abox,
  with_types_p
) => {
  return String(
    racerCall(
      "get-individual-datatype-fillers",
      individual_name,
      abox,
      with_types_p
    )
  );
};
export const get_individual_datatype_fillers_ = (individual_name, abox) => {
  return racerCall("get-individual-datatype-fillers", individual_name, abox);
};
export const get_individual_pmodel = (individual_name, abox) => {
  return String(racerCall("get-individual-pmodel", individual_name, abox));
};
export const get_individual_pmodel_ = (individual_name, abox) => {
  return racerCall("get-individual-pmodel", individual_name, abox);
};
export const get_individual_successors = (key_args) => {
  return String(racerCall("get-individual-successors", key_args));
};
export const get_individual_successors_ = (key_args) => {
  return racerCall("get-individual-successors", key_args);
};
export const get_initial_size_of_process_pool = () => {
  return String(racerCall("get-initial-size-of-process-pool"));
};
export const get_initial_size_of_process_pool_ = () => {
  return racerCall("get-initial-size-of-process-pool");
};
export const get_kb_signature = (kb_name) => {
  return String(racerCall("get-kb-signature", kb_name));
};
export const get_kb_signature_ = (kb_name) => {
  return racerCall("get-kb-signature", kb_name);
};
export const get_max_no_of_tuples_bound = () => {
  return String(racerCall("get-max-no-of-tuples-bound"));
};
export const get_max_no_of_tuples_bound_ = () => {
  return racerCall("get-max-no-of-tuples-bound");
};
export const get_maximum = (key_args) => {
  return String(racerCall("get-maximum", key_args));
};
export const get_maximum_ = (key_args) => {
  return racerCall("get-maximum", key_args);
};
export const get_maximum_size_of_process_pool = () => {
  return String(racerCall("get-maximum-size-of-process-pool"));
};
export const get_maximum_size_of_process_pool_ = () => {
  return racerCall("get-maximum-size-of-process-pool");
};
export const get_meta_constraint = (tbox) => {
  return String(racerCall("get-meta-constraint", tbox));
};
export const get_meta_constraint_ = (tbox) => {
  return racerCall("get-meta-constraint", tbox);
};
export const get_minimum = (key_args) => {
  return String(racerCall("get-minimum", key_args));
};
export const get_minimum_ = (key_args) => {
  return racerCall("get-minimum", key_args);
};
export const get_namespace_prefix = (tbox) => {
  return String(racerCall("get-namespace-prefix", tbox));
};
export const get_namespace_prefix_ = (tbox) => {
  return racerCall("get-namespace-prefix", tbox);
};
export const get_new_ind_counter = () => {
  return String(racerCall("get-new-ind-counter"));
};
export const get_new_ind_counter_ = () => {
  return racerCall("get-new-ind-counter");
};
export const get_new_ind_prefix = () => {
  return String(racerCall("get-new-ind-prefix"));
};
export const get_new_ind_prefix_ = () => {
  return racerCall("get-new-ind-prefix");
};
export const get_next_n_remaining_sets_of_rule_consequences = (query, n) => {
  return String(
    racerCall("get-next-n-remaining-sets-of-rule-consequences", query, n)
  );
};
export const get_next_n_remaining_sets_of_rule_consequences_ = (query, n) => {
  return racerCall("get-next-n-remaining-sets-of-rule-consequences", query, n);
};
export const get_next_n_remaining_tuples = (key_args) => {
  return String(racerCall("get-next-n-remaining-tuples", key_args));
};
export const get_next_n_remaining_tuples_ = (key_args) => {
  return racerCall("get-next-n-remaining-tuples", key_args);
};
export const get_next_set_of_rule_consequences = (query) => {
  return String(racerCall("get-next-set-of-rule-consequences", query));
};
export const get_next_set_of_rule_consequences_ = (query) => {
  return racerCall("get-next-set-of-rule-consequences", query);
};
export const get_next_tuple = (key_args) => {
  return String(racerCall("get-next-tuple", key_args));
};
export const get_next_tuple_ = (key_args) => {
  return racerCall("get-next-tuple", key_args);
};
export const get_nodes_in_qbox_for_abox = (abox) => {
  return String(racerCall("get-nodes-in-qbox-for-abox", abox));
};
export const get_nodes_in_qbox_for_abox_ = (abox) => {
  return racerCall("get-nodes-in-qbox-for-abox", abox);
};
export const get_nrql_version = () => {
  return String(racerCall("get-nrql-version"));
};
export const get_nrql_version_ = () => {
  return racerCall("get-nrql-version");
};
export const get_number_of_explanations = (key_args) => {
  return String(racerCall("get-number-of-explanations", key_args));
};
export const get_number_of_explanations_ = (key_args) => {
  return racerCall("get-number-of-explanations", key_args);
};
export const get_object_bottom_role = (tbox) => {
  return String(racerCall("get-object-bottom-role", tbox));
};
export const get_object_bottom_role_ = (tbox) => {
  return racerCall("get-object-bottom-role", tbox);
};
export const get_prefixes = (tbox, ask_owlapi_p) => {
  return String(racerCall("get-prefixes", tbox, ask_owlapi_p));
};
export const get_prefixes_ = (tbox, ask_owlapi_p) => {
  return racerCall("get-prefixes", tbox, ask_owlapi_p);
};
export const get_process_pool_size = () => {
  return String(racerCall("get-process-pool-size"));
};
export const get_process_pool_size_ = () => {
  return racerCall("get-process-pool-size");
};
export const get_proxy_server = () => {
  return String(racerCall("get-proxy-server"));
};
export const get_proxy_server_ = () => {
  return racerCall("get-proxy-server");
};
export const get_role_datatype = (role_name, tbox) => {
  return String(racerCall("get-role-datatype", role_name, tbox));
};
export const get_role_datatype_ = (role_name, tbox) => {
  return racerCall("get-role-datatype", role_name, tbox);
};
export const get_role_hierarchy = (key_args) => {
  return String(racerCall("get-role-hierarchy", key_args));
};
export const get_role_hierarchy_ = (key_args) => {
  return racerCall("get-role-hierarchy", key_args);
};
export const get_server_timeout = () => {
  return String(racerCall("get-server-timeout"));
};
export const get_server_timeout_ = () => {
  return racerCall("get-server-timeout");
};
export const get_substrate_edges = (key_args) => {
  return String(racerCall("get-substrate-edges", key_args));
};
export const get_substrate_edges_ = (key_args) => {
  return racerCall("get-substrate-edges", key_args);
};
export const get_substrate_nodes = (key_args) => {
  return String(racerCall("get-substrate-nodes", key_args));
};
export const get_substrate_nodes_ = (key_args) => {
  return racerCall("get-substrate-nodes", key_args);
};
export const get_substrate_type = () => {
  return String(racerCall("get-substrate-type"));
};
export const get_substrate_type_ = () => {
  return racerCall("get-substrate-type");
};
export const get_tbox_language = (tbox) => {
  return String(racerCall("get-tbox-language", tbox));
};
export const get_tbox_language_ = (tbox) => {
  return racerCall("get-tbox-language", tbox);
};
export const get_tbox_signature = (tbox) => {
  return String(racerCall("get-tbox-signature", tbox));
};
export const get_tbox_signature_ = (tbox) => {
  return racerCall("get-tbox-signature", tbox);
};
export const get_tbox_version = (tbox) => {
  return String(racerCall("get-tbox-version", tbox));
};
export const get_tbox_version_ = (tbox) => {
  return racerCall("get-tbox-version", tbox);
};
export const in_unsafe_mode_p = () => {
  return Boolean(racerCall("in-unsafe-mode?"));
};
export const inaccurate_queries = (key_args) => {
  return String(racerCall("inaccurate-queries", key_args));
};
export const inaccurate_queries_ = (key_args) => {
  return racerCall("inaccurate-queries", key_args);
};
export const inaccurate_rules = (key_args) => {
  return String(racerCall("inaccurate-rules", key_args));
};
export const inaccurate_rules_ = (key_args) => {
  return racerCall("inaccurate-rules", key_args);
};
export const include_kb = (pathname) => {
  return String(racerCall("include-kb", pathname));
};
export const include_kb_ = (pathname) => {
  return racerCall("include-kb", pathname);
};
export const include_permutations = () => {
  return String(racerCall("include-permutations"));
};
export const include_permutations_ = () => {
  return racerCall("include-permutations");
};
export const index_all_triples = (key_args) => {
  return String(racerCall("index-all-triples", key_args));
};
export const index_all_triples_ = (key_args) => {
  return racerCall("index-all-triples", key_args);
};
export const individual_instance_p = (individual_name, concept, abox) => {
  return Boolean(
    racerCall("individual-instance-p", individual_name, concept, abox)
  );
};
export const individual_p = (individual_name, abox) => {
  return Boolean(racerCall("individual-p", individual_name, abox));
};
export const individuals_equal_p = (individual1, individual2, abox) => {
  return Boolean(
    racerCall("individuals-equal-p", individual1, individual2, abox)
  );
};
export const individuals_not_equal_p = (individual1, individual2, abox) => {
  return Boolean(
    racerCall("individuals-not-equal-p", individual1, individual2, abox)
  );
};
export const individuals_related_p = (
  ind_predecessor_name_set,
  ind_filler_name_set,
  role_term,
  abox
) => {
  return Boolean(
    racerCall(
      "individuals-related-p",
      ind_predecessor_name_set,
      ind_filler_name_set,
      role_term,
      abox
    )
  );
};
export const init_abox = (abox, tbox) => {
  return String(racerCall("init-abox", abox, tbox));
};
export const init_abox_ = (abox, tbox) => {
  return racerCall("init-abox", abox, tbox);
};
export const init_publications1 = (abox) => {
  return String(racerCall("init-publications-1", abox));
};
export const init_publications1_ = (abox) => {
  return racerCall("init-publications-1", abox);
};
export const init_subscriptions1 = (abox) => {
  return String(racerCall("init-subscriptions-1", abox));
};
export const init_subscriptions1_ = (abox) => {
  return racerCall("init-subscriptions-1", abox);
};
export const init_tbox = (key_args) => {
  return String(racerCall("init-tbox", key_args));
};
export const init_tbox_ = (key_args) => {
  return racerCall("init-tbox", key_args);
};
export const installed_patches = () => {
  return String(racerCall("installed-patches"));
};
export const installed_patches_ = () => {
  return racerCall("installed-patches");
};
export const installed_plugins = () => {
  return String(racerCall("installed-plugins"));
};
export const installed_plugins_ = () => {
  return racerCall("installed-plugins");
};
export const instantiators = (individual_name, abox) => {
  return String(racerCall("instantiators", individual_name, abox));
};
export const instantiators_ = (individual_name, abox) => {
  return racerCall("instantiators", individual_name, abox);
};
export const internal_individuals_related_p = (
  ind_predecessor_name_set,
  ind_filler_name_set,
  role_term,
  abox,
  check_p
) => {
  return Boolean(
    racerCall(
      "internal-individuals-related-p",
      ind_predecessor_name_set,
      ind_filler_name_set,
      role_term,
      abox,
      check_p
    )
  );
};
export const inverse_feature_p = (role_term, tbox) => {
  return Boolean(racerCall("inverse-feature-p", role_term, tbox));
};
export const inverse_of_role = (rolename, inverse_role, tbox) => {
  return String(racerCall("inverse-of-role", rolename, inverse_role, tbox));
};
export const inverse_of_role_ = (rolename, inverse_role, tbox) => {
  return racerCall("inverse-of-role", rolename, inverse_role, tbox);
};
export const irreflexive_p = (role_term, tbox) => {
  return Boolean(racerCall("irreflexive-p", role_term, tbox));
};
export const kb_ontologies = (kb_name) => {
  return String(racerCall("kb-ontologies", kb_name));
};
export const kb_ontologies_ = (kb_name) => {
  return racerCall("kb-ontologies", kb_name);
};
export const keep_defined_query_atoms = () => {
  return String(racerCall("keep-defined-query-atoms"));
};
export const keep_defined_query_atoms_ = () => {
  return racerCall("keep-defined-query-atoms");
};
export const lcs = (concept1, concept2) => {
  return String(racerCall("lcs", concept1, concept2));
};
export const lcs_ = (concept1, concept2) => {
  return racerCall("lcs", concept1, concept2);
};
export const lcs_unfold = (concept1, concept2, tbox) => {
  return String(racerCall("lcs-unfold", concept1, concept2, tbox));
};
export const lcs_unfold_ = (concept1, concept2, tbox) => {
  return racerCall("lcs-unfold", concept1, concept2, tbox);
};
export const load_racer_patch = (fn) => {
  return String(racerCall("load-racer-patch", fn));
};
export const load_racer_patch_ = (fn) => {
  return racerCall("load-racer-patch", fn);
};
export const load_racer_patches = (directory) => {
  return String(racerCall("load-racer-patches", directory));
};
export const load_racer_patches_ = (directory) => {
  return racerCall("load-racer-patches", directory);
};
export const load_racer_plugin = (fn) => {
  return String(racerCall("load-racer-plugin", fn));
};
export const load_racer_plugin_ = (fn) => {
  return racerCall("load-racer-plugin", fn);
};
export const load_racer_plugins = (directory) => {
  return String(racerCall("load-racer-plugins", directory));
};
export const load_racer_plugins_ = (directory) => {
  return racerCall("load-racer-plugins", directory);
};
export const logging_off = () => {
  return String(racerCall("logging-off"));
};
export const logging_off_ = () => {
  return racerCall("logging-off");
};
export const logging_on = (filename, debug) => {
  return String(racerCall("logging-on", filename, debug));
};
export const logging_on_ = (filename, debug) => {
  return racerCall("logging-on", filename, debug);
};
export const make_abduction_rule_from_aboxes = (key_args) => {
  return String(racerCall("make-abduction-rule-from-aboxes", key_args));
};
export const make_abduction_rule_from_aboxes_ = (key_args) => {
  return racerCall("make-abduction-rule-from-aboxes", key_args);
};
export const make_backward_rule_from_aboxes = (
  precond_abox,
  postcond_abox,
  for_abox
) => {
  return String(
    racerCall(
      "make-backward-rule-from-aboxes",
      precond_abox,
      postcond_abox,
      for_abox
    )
  );
};
export const make_backward_rule_from_aboxes_ = (key_args) => {
  return racerCall("make-backward-rule-from-aboxes", key_args);
};
export const make_forward_rule_from_aboxes = (
  precond_abox,
  postcond_abox,
  for_abox
) => {
  return String(
    racerCall(
      "make-forward-rule-from-aboxes",
      precond_abox,
      postcond_abox,
      for_abox
    )
  );
};
export const make_forward_rule_from_aboxes_ = (key_args) => {
  return racerCall("make-forward-rule-from-aboxes", key_args);
};
export const make_plugin_from_fasl_file = (key_args) => {
  return String(racerCall("make-plugin-from-fasl-file", key_args));
};
export const make_plugin_from_fasl_file_ = (key_args) => {
  return racerCall("make-plugin-from-fasl-file", key_args);
};
export const make_query_from_abox = (key_args) => {
  return String(racerCall("make-query-from-abox", key_args));
};
export const make_query_from_abox_ = (key_args) => {
  return racerCall("make-query-from-abox", key_args);
};
export const materialize_inferences = (key_args) => {
  return String(racerCall("materialize-inferences", key_args));
};
export const materialize_inferences_ = (key_args) => {
  return racerCall("materialize-inferences", key_args);
};
export const mirror = (url_spec1, url_or_filename) => {
  return String(racerCall("mirror", url_spec1, url_or_filename));
};
export const mirror_ = (url_spec1, url_or_filename) => {
  return racerCall("mirror", url_spec1, url_or_filename);
};
export const most_specific_instantiators = (individual_name, abox) => {
  return String(
    racerCall("most-specific-instantiators", individual_name, abox)
  );
};
export const most_specific_instantiators_ = (individual_name, abox) => {
  return racerCall("most-specific-instantiators", individual_name, abox);
};
export const move_rules = (key_args) => {
  return String(racerCall("move-rules", key_args));
};
export const move_rules_ = (key_args) => {
  return racerCall("move-rules", key_args);
};
export const msc_k = (key_args) => {
  return String(racerCall("msc-k", key_args));
};
export const msc_k_ = (key_args) => {
  return racerCall("msc-k", key_args);
};
export const next_set_of_rule_consequences_available_p = (query) => {
  return Boolean(racerCall("next-set-of-rule-consequences-available-p", query));
};
export const next_tuple_available_p = (query) => {
  return Boolean(racerCall("next-tuple-available-p", query));
};
export const node_description1 = (name, abox, type_of_substrate) => {
  return String(racerCall("node-description1", name, abox, type_of_substrate));
};
export const node_description1_ = (name, abox, type_of_substrate) => {
  return racerCall("node-description1", name, abox, type_of_substrate);
};
export const node_label1 = (name, abox, type_of_substrate) => {
  return String(racerCall("node-label1", name, abox, type_of_substrate));
};
export const node_label1_ = (name, abox, type_of_substrate) => {
  return racerCall("node-label1", name, abox, type_of_substrate);
};
export const open_triple_store = (key_args) => {
  return String(racerCall("open-triple-store", key_args));
};
export const open_triple_store_ = (key_args) => {
  return racerCall("open-triple-store", key_args);
};
export const optimizer_dont_ensure_late_lambda_evaluation = () => {
  return String(racerCall("optimizer-dont-ensure-late-lambda-evaluation"));
};
export const optimizer_dont_ensure_late_lambda_evaluation_ = () => {
  return racerCall("optimizer-dont-ensure-late-lambda-evaluation");
};
export const optimizer_dont_use_cardinality_heuristics = () => {
  return String(racerCall("optimizer-dont-use-cardinality-heuristics"));
};
export const optimizer_dont_use_cardinality_heuristics_ = () => {
  return racerCall("optimizer-dont-use-cardinality-heuristics");
};
export const optimizer_ensure_late_lambda_evaluation = () => {
  return String(racerCall("optimizer-ensure-late-lambda-evaluation"));
};
export const optimizer_ensure_late_lambda_evaluation_ = () => {
  return racerCall("optimizer-ensure-late-lambda-evaluation");
};
export const optimizer_get_no_of_plans_upper_bound = () => {
  return String(racerCall("optimizer-get-no-of-plans-upper-bound"));
};
export const optimizer_get_no_of_plans_upper_bound_ = () => {
  return racerCall("optimizer-get-no-of-plans-upper-bound");
};
export const optimizer_get_time_bound = () => {
  return String(racerCall("optimizer-get-time-bound"));
};
export const optimizer_get_time_bound_ = () => {
  return racerCall("optimizer-get-time-bound");
};
export const optimizer_set_no_of_plans_upper_bound = (n) => {
  return String(racerCall("optimizer-set-no-of-plans-upper-bound", n));
};
export const optimizer_set_no_of_plans_upper_bound_ = (n) => {
  return racerCall("optimizer-set-no-of-plans-upper-bound", n);
};
export const optimizer_set_time_bound = (n) => {
  return String(racerCall("optimizer-set-time-bound", n));
};
export const optimizer_set_time_bound_ = (n) => {
  return racerCall("optimizer-set-time-bound", n);
};
export const optimizer_use_cardinality_heuristics = () => {
  return String(racerCall("optimizer-use-cardinality-heuristics"));
};
export const optimizer_use_cardinality_heuristics_ = () => {
  return racerCall("optimizer-use-cardinality-heuristics");
};
export const original_query_body = (query) => {
  return String(racerCall("original-query-body", query));
};
export const original_query_body_ = (query) => {
  return racerCall("original-query-body", query);
};
export const original_query_head = (query) => {
  return String(racerCall("original-query-head", query));
};
export const original_query_head_ = (query) => {
  return racerCall("original-query-head", query);
};
export const original_rule_antecedence = (query) => {
  return String(racerCall("original-rule-antecedence", query));
};
export const original_rule_antecedence_ = (query) => {
  return racerCall("original-rule-antecedence", query);
};
export const original_rule_consequence = (query) => {
  return String(racerCall("original-rule-consequence", query));
};
export const original_rule_consequence_ = (query) => {
  return racerCall("original-rule-consequence", query);
};
export const owl_read_document = (key_args) => {
  return String(racerCall("owl-read-document", key_args));
};
export const owl_read_document_ = (key_args) => {
  return racerCall("owl-read-document", key_args);
};
export const owl_read_file = (key_args) => {
  return String(racerCall("owl-read-file", key_args));
};
export const owl_read_file_ = (key_args) => {
  return racerCall("owl-read-file", key_args);
};
export const owlapi_add_axiom = () => {
  return String(racerCall("|_o_w_l_a_p_i-add_axiom|"));
};
export const owlapi_add_axiom_ = () => {
  return racerCall("|_o_w_l_a_p_i-add_axiom|");
};
export const owlapi_add_axioms = () => {
  return String(racerCall("|_o_w_l_a_p_i-add_axioms|"));
};
export const owlapi_add_axioms_ = () => {
  return racerCall("|_o_w_l_a_p_i-add_axioms|");
};
export const owlapi_add_prefix = (prefix, namespace, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-add_prefix|", prefix, namespace, reasoner)
  );
};
export const owlapi_add_prefix_ = (prefix, namespace, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-add_prefix|", prefix, namespace, reasoner);
};
export const owlapi_advance_progress = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-advance_progress|", reasoner));
};
export const owlapi_advance_progress_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-advance_progress|", reasoner);
};
export const owlapi_apply_changes = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-apply_changes|", reasoner));
};
export const owlapi_apply_changes_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-apply_changes|", reasoner);
};
export const owlapi_auto_add_axioms_to = (ontology, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-auto_add_axioms_to|", ontology, reasoner)
  );
};
export const owlapi_auto_add_axioms_to_ = (ontology, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-auto_add_axioms_to|", ontology, reasoner);
};
export const owlapi_auto_apply_changes = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-auto_apply_changes|", reasoner));
};
export const owlapi_auto_apply_changes_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-auto_apply_changes|", reasoner);
};
export const owlapi_auto_batch_add_axioms_to = (ontology, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-auto_batch_add_axioms_to|", ontology, reasoner)
  );
};
export const owlapi_auto_batch_add_axioms_to_ = (ontology, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-auto_batch_add_axioms_to|",
    ontology,
    reasoner
  );
};
export const owlapi_auto_batch_remove_axioms_from = (ontology, reasoner) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-auto_batch_remove_axioms_from|",
      ontology,
      reasoner
    )
  );
};
export const owlapi_auto_batch_remove_axioms_from_ = (ontology, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-auto_batch_remove_axioms_from|",
    ontology,
    reasoner
  );
};
export const owlapi_auto_remove_axioms_from = (ontology, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-auto_remove_axioms_from|", ontology, reasoner)
  );
};
export const owlapi_auto_remove_axioms_from_ = (ontology, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-auto_remove_axioms_from|",
    ontology,
    reasoner
  );
};
export const owlapi_axiom_loaded_p = (id, reasoner) => {
  return Boolean(racerCall("|_o_w_l_a_p_i-_axiom_loaded?|", id, reasoner));
};
export const owlapi_axiom_to_i_d = (axiom_constructor_call, reasoner, ont) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-_axiom_to_i_d|",
      axiom_constructor_call,
      reasoner,
      ont
    )
  );
};
export const owlapi_axiom_to_i_d_ = (axiom_constructor_call, reasoner, ont) => {
  return racerCall(
    "|_o_w_l_a_p_i-_axiom_to_i_d|",
    axiom_constructor_call,
    reasoner,
    ont
  );
};
export const owlapi_batch_synchronize = (ontology, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-batch_synchronize|", ontology, reasoner)
  );
};
export const owlapi_batch_synchronize_ = (ontology, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-batch_synchronize|", ontology, reasoner);
};
export const owlapi_clear_changes = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-clear_changes|", reasoner));
};
export const owlapi_clear_changes_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-clear_changes|", reasoner);
};
export const owlapi_clear_ontologies = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-clear_ontologies|", reasoner));
};
export const owlapi_clear_ontologies_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-clear_ontologies|", reasoner);
};
export const owlapi_clear_registry = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-clear_registry|", reasoner));
};
export const owlapi_clear_registry_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-clear_registry|", reasoner);
};
export const owlapi_consider_declarations = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-consider_declarations|", reasoner));
};
export const owlapi_consider_declarations_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-consider_declarations|", reasoner);
};
export const owlapi_describe_ontologies = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-describe_ontologies|", reasoner));
};
export const owlapi_describe_ontologies_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-describe_ontologies|", reasoner);
};
export const owlapi_describe_ontology = (ontology, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-describe_ontology|", ontology, reasoner)
  );
};
export const owlapi_describe_ontology_ = (ontology, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-describe_ontology|", ontology, reasoner);
};
export const owlapi_describe_reasoner = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-describe_reasoner|", reasoner));
};
export const owlapi_describe_reasoner_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-describe_reasoner|", reasoner);
};
export const owlapi_describe_reasoners = () => {
  return String(racerCall("|_o_w_l_a_p_i-describe_reasoners|"));
};
export const owlapi_describe_reasoners_ = () => {
  return racerCall("|_o_w_l_a_p_i-describe_reasoners|");
};
export const owlapi_disable_auto_mode = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-disable_auto_mode|", reasoner));
};
export const owlapi_disable_auto_mode_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-disable_auto_mode|", reasoner);
};
export const owlapi_disable_incremental_updates = (reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-disable_incremental_updates|", reasoner)
  );
};
export const owlapi_disable_incremental_updates_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-disable_incremental_updates|", reasoner);
};
export const owlapi_disable_lookup_mode = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-disable_lookup_mode|", reasoner));
};
export const owlapi_disable_lookup_mode_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-disable_lookup_mode|", reasoner);
};
export const owlapi_disable_memory_saving_mode = (reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-disable_memory_saving_mode|", reasoner)
  );
};
export const owlapi_disable_memory_saving_mode_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-disable_memory_saving_mode|", reasoner);
};
export const owlapi_disable_simplified_protocol = (reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-disable_simplified_protocol|", reasoner)
  );
};
export const owlapi_disable_simplified_protocol_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-disable_simplified_protocol|", reasoner);
};
export const owlapi_disable_transient_axiom_mode = (reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-disable_transient_axiom_mode|", reasoner)
  );
};
export const owlapi_disable_transient_axiom_mode_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-disable_transient_axiom_mode|", reasoner);
};
export const owlapi_dispose_axiom = (id_or_constructor, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-dispose_axiom|", id_or_constructor, reasoner)
  );
};
export const owlapi_dispose_axiom_ = (id_or_constructor, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-dispose_axiom|", id_or_constructor, reasoner);
};
export const owlapi_dispose_axioms = (ids_or_constructors, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-dispose_axioms|", ids_or_constructors, reasoner)
  );
};
export const owlapi_dispose_axioms_ = (ids_or_constructors, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-dispose_axioms|",
    ids_or_constructors,
    reasoner
  );
};
export const owlapi_dispose_ontologies = (ontologies, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-dispose_ontologies|", ontologies, reasoner)
  );
};
export const owlapi_dispose_ontologies_ = (ontologies, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-dispose_ontologies|", ontologies, reasoner);
};
export const owlapi_dispose_ontology = (
  ont_name,
  reasoner,
  dispose_axioms_p
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-dispose_ontology|",
      ont_name,
      reasoner,
      dispose_axioms_p
    )
  );
};
export const owlapi_dispose_ontology_ = (
  ont_name,
  reasoner,
  dispose_axioms_p
) => {
  return racerCall(
    "|_o_w_l_a_p_i-dispose_ontology|",
    ont_name,
    reasoner,
    dispose_axioms_p
  );
};
export const owlapi_dispose_reasoner = (name) => {
  return String(racerCall("|_o_w_l_a_p_i-dispose_reasoner|", name));
};
export const owlapi_dispose_reasoner_ = (name) => {
  return racerCall("|_o_w_l_a_p_i-dispose_reasoner|", name);
};
export const owlapi_dont_register_declared_entities = (reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-dont_register_declared_entities|", reasoner)
  );
};
export const owlapi_dont_register_declared_entities_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-dont_register_declared_entities|", reasoner);
};
export const owlapi_dont_register_referenced_entities = (reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-dont_register_referenced_entities|", reasoner)
  );
};
export const owlapi_dont_register_referenced_entities_ = (reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-dont_register_referenced_entities|",
    reasoner
  );
};
export const owlapi_enable_incremental_updates = (reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-enable_incremental_updates|", reasoner)
  );
};

export const owlapi_enable_incremental_updates_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-enable_incremental_updates|", reasoner);
};

export const owlapi_enable_lookup_mode = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-enable_lookup_mode|", reasoner));
};

export const owlapi_enable_lookup_mode_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-enable_lookup_mode|", reasoner);
};
export const owlapi_enable_memory_saving_mode = (
  ontology,
  reasoner,
  use_less_tbox_memory_p
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-enable_memory_saving_mode|",
      ontology,
      reasoner,
      use_less_tbox_memory_p
    )
  );
};
export const owlapi_enable_memory_saving_mode_ = (
  ontology,
  reasoner,
  use_less_tbox_memory_p
) => {
  return racerCall(
    "|_o_w_l_a_p_i-enable_memory_saving_mode|",
    ontology,
    reasoner,
    use_less_tbox_memory_p
  );
};
export const owlapi_enable_simplified_protocol = (reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-enable_simplified_protocol|", reasoner)
  );
};
export const owlapi_enable_simplified_protocol_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-enable_simplified_protocol|", reasoner);
};
export const owlapi_enable_transient_axiom_mode = (reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-enable_transient_axiom_mode|", reasoner)
  );
};
export const owlapi_enable_transient_axiom_mode_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-enable_transient_axiom_mode|", reasoner);
};
export const owlapi_export_ontology = (key_args) => {
  return String(racerCall("|_o_w_l_a_p_i-export_ontology|", key_args));
};
export const owlapi_export_ontology_ = (key_args) => {
  return racerCall("|_o_w_l_a_p_i-export_ontology|", key_args);
};
export const owlapi_export_reasoner = (key_args) => {
  return String(racerCall("|_o_w_l_a_p_i-export_reasoner|", key_args));
};
export const owlapi_export_reasoner_ = (key_args) => {
  return racerCall("|_o_w_l_a_p_i-export_reasoner|", key_args);
};
export const owlapi_find_i_d_from_object = (obj) => {
  return String(racerCall("|_o_w_l_a_p_i-find_i_d_from_object|", obj));
};
export const owlapi_find_i_d_from_object_ = (obj) => {
  return racerCall("|_o_w_l_a_p_i-find_i_d_from_object|", obj);
};
export const owlapi_find_object_from_i_d = (id) => {
  return String(racerCall("|_o_w_l_a_p_i-find_object_from_i_d|", id));
};
export const owlapi_find_object_from_i_d_ = (id) => {
  return racerCall("|_o_w_l_a_p_i-find_object_from_i_d|", id);
};
export const owlapi_get_all_ontologies = () => {
  return String(racerCall("|_o_w_l_a_p_i-get_all_ontologies|"));
};
export const owlapi_get_all_ontologies_ = () => {
  return racerCall("|_o_w_l_a_p_i-get_all_ontologies|");
};
export const owlapi_get_ancestor_classes = (cls, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_ancestor_classes|", cls, reasoner)
  );
};
export const owlapi_get_ancestor_classes_ = (cls, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_ancestor_classes|", cls, reasoner);
};
export const owlapi_get_ancestor_properties = (
  property_,
  reasoner,
  remove__p
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_ancestor_properties|",
      property_,
      reasoner,
      remove__p
    )
  );
};
export const owlapi_get_ancestor_properties_ = (
  property_,
  reasoner,
  remove__p
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_ancestor_properties|",
    property_,
    reasoner,
    remove__p
  );
};
export const owlapi_get_annotation_axioms_for_axiom = (axiom_id, reasoner) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_annotation_axioms_for_axiom|",
      axiom_id,
      reasoner
    )
  );
};
export const owlapi_get_annotation_axioms_for_axiom_ = (axiom_id, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_annotation_axioms_for_axiom|",
    axiom_id,
    reasoner
  );
};
export const owlapi_get_auto_declare_data_properties = (reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_auto_declare_data_properties|", reasoner)
  );
};
export const owlapi_get_auto_declare_data_properties_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_auto_declare_data_properties|", reasoner);
};
export const owlapi_get_auto_ontology = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-get_auto_ontology|", reasoner));
};
export const owlapi_get_auto_ontology_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_auto_ontology|", reasoner);
};
export const owlapi_get_axiom_counter = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-get_axiom_counter|", reasoner));
};
export const owlapi_get_axiom_counter_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_axiom_counter|", reasoner);
};
export const owlapi_get_axioms = (
  reasoner,
  with_ids_p,
  with_ont_names_p,
  status
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_axioms|",
      reasoner,
      with_ids_p,
      with_ont_names_p,
      status
    )
  );
};
export const owlapi_get_axioms_ = (reasoner, with_ids_p, with_ont_names_p) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_axioms|",
    reasoner,
    with_ids_p,
    with_ont_names_p
  );
};
export const owlapi_get_axioms_in = (ont, reasoner, with_ids_p, status) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_axioms_in|", ont, reasoner, with_ids_p, status)
  );
};
export const owlapi_get_axioms_in_ = (ont, reasoner, with_ids_p, status) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_axioms_in|",
    ont,
    reasoner,
    with_ids_p,
    status
  );
};
export const owlapi_get_axioms_of_type = (
  type_or_types,
  reasoner,
  with_ids_p,
  with_ont_names_p,
  status
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_axioms_of_type|",
      type_or_types,
      reasoner,
      with_ids_p,
      with_ont_names_p,
      status
    )
  );
};
export const owlapi_get_axioms_of_type_ = (
  type_or_types,
  reasoner,
  with_ids_p,
  with_ont_names_p,
  status
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_axioms_of_type|",
    type_or_types,
    reasoner,
    with_ids_p,
    with_ont_names_p,
    status
  );
};
export const owlapi_get_axioms_of_type_in = (
  type_or_types,
  ont,
  reasoner,
  with_ids_p,
  status
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_axioms_of_type_in|",
      type_or_types,
      ont,
      reasoner,
      with_ids_p,
      status
    )
  );
};
export const owlapi_get_axioms_of_type_in_ = (
  type_or_types,
  ont,
  reasoner,
  with_ids_p,
  status
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_axioms_of_type_in|",
    type_or_types,
    ont,
    reasoner,
    with_ids_p,
    status
  );
};
export const owlapi_get_axioms_per_ontology = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-get_axioms_per_ontology|", reasoner));
};
export const owlapi_get_axioms_per_ontology_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_axioms_per_ontology|", reasoner);
};
export const owlapi_get_changes = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-get_changes|", reasoner));
};
export const owlapi_get_changes_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_changes|", reasoner);
};
export const owlapi_get_current_reasoner = () => {
  return String(racerCall("|_o_w_l_a_p_i-get_current_reasoner|"));
};
export const owlapi_get_current_reasoner_ = () => {
  return racerCall("|_o_w_l_a_p_i-get_current_reasoner|");
};
export const owlapi_get_data_property_relationships = (ind, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_data_property_relationships|", ind, reasoner)
  );
};
export const owlapi_get_data_property_relationships_ = (ind, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_data_property_relationships|",
    ind,
    reasoner
  );
};
export const owlapi_get_data_property_values = (ind, property_, reasoner) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_data_property_values|",
      ind,
      property_,
      reasoner
    )
  );
};
export const owlapi_get_data_property_values_ = (ind, property_, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_data_property_values|",
    ind,
    property_,
    reasoner
  );
};
export const owlapi_get_descendant_classes = (cls, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_descendant_classes|", cls, reasoner)
  );
};
export const owlapi_get_descendant_classes_ = (cls, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_descendant_classes|", cls, reasoner);
};
export const owlapi_get_descendant_properties = (
  property_,
  reasoner,
  remove__p
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_descendant_properties|",
      property_,
      reasoner,
      remove__p
    )
  );
};
export const owlapi_get_descendant_properties_ = (property_, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_descendant_properties|",
    property_,
    reasoner
  );
};
export const owlapi_get_different_individuals = (ind, reasoner, synonyms) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_different_individuals|",
      ind,
      reasoner,
      synonyms
    )
  );
};
export const owlapi_get_different_individuals_ = (ind, reasoner, synonyms) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_different_individuals|",
    ind,
    reasoner,
    synonyms
  );
};
export const owlapi_get_disjoint_classes = (concept, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_disjoint_classes|", concept, reasoner)
  );
};
export const owlapi_get_disjoint_classes_ = (concept, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_disjoint_classes|", concept, reasoner);
};
export const owlapi_get_disjoint_data_properties = (property_, reasoner) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_disjoint_data_properties|",
      property_,
      reasoner
    )
  );
};
export const owlapi_get_disjoint_data_properties_ = (property_, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_disjoint_data_properties|",
    property_,
    reasoner
  );
};
export const owlapi_get_disjoint_object_properties = (property_, reasoner) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_disjoint_object_properties|",
      property_,
      reasoner
    )
  );
};
export const owlapi_get_disjoint_object_properties_ = (property_, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_disjoint_object_properties|",
    property_,
    reasoner
  );
};
export const owlapi_get_domains = (
  property_,
  reasoner,
  owlapi_hacking_mode
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_domains|",
      property_,
      reasoner,
      owlapi_hacking_mode
    )
  );
};
export const owlapi_get_domains_ = (
  property_,
  reasoner,
  owlapi_hacking_mode
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_domains|",
    property_,
    reasoner,
    owlapi_hacking_mode
  );
};
export const owlapi_get_equivalent_classes = (cls, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_equivalent_classes|", cls, reasoner)
  );
};
export const owlapi_get_equivalent_classes_ = (cls, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_equivalent_classes|", cls, reasoner);
};
export const owlapi_get_equivalent_properties = (
  property_,
  reasoner,
  remove__p
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_equivalent_properties|",
      property_,
      reasoner,
      remove__p
    )
  );
};
export const owlapi_get_equivalent_properties_ = (property_, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_equivalent_properties|",
    property_,
    reasoner,
    reasoner
  );
};
export const owlapi_get_inconsistent_classes = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-get_inconsistent_classes|", reasoner));
};
export const owlapi_get_inconsistent_classes_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_inconsistent_classes|", reasoner);
};
export const owlapi_get_individuals = (cls1, direct, cls2, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_individuals|", cls1, direct, cls2, reasoner)
  );
};
export const owlapi_get_individuals_ = (cls1, direct, cls2, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_individuals|",
    cls1,
    direct,
    cls2,
    reasoner
  );
};
export const owlapi_get_instances = (
  cls3,
  direct,
  cls4,
  reasoner,
  synonyms,
  cls5
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_instances|",
      cls3,
      direct,
      cls4,
      reasoner,
      synonyms,
      cls5
    )
  );
};
export const owlapi_get_instances_ = (
  cls3,
  direct,
  cls4,
  reasoner,
  synonyms,
  cls5
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_instances|",
    cls3,
    direct,
    cls4,
    reasoner,
    synonyms,
    cls5
  );
};
export const owlapi_get_inverse_properties = (property_, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_inverse_properties|", property_, reasoner)
  );
};
export const owlapi_get_inverse_properties_ = (property_, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_inverse_properties|",
    property_,
    reasoner
  );
};
export const owlapi_get_loaded_ontologies = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-get_loaded_ontologies|", reasoner));
};
export const owlapi_get_loaded_ontologies_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_loaded_ontologies|", reasoner);
};
export const owlapi_get_object_property_relationships = (ind, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_object_property_relationships|", ind, reasoner)
  );
};
export const owlapi_get_object_property_relationships_ = (ind, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_object_property_relationships|",
    ind,
    reasoner
  );
};
export const owlapi_get_object_property_values = (ind, property_, reasoner) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_object_property_values|",
      ind,
      property_,
      reasoner
    )
  );
};
export const owlapi_get_object_property_values_ = (
  ind,
  property_,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_object_property_values|",
    ind,
    property_,
    reasoner
  );
};
export const owlapi_get_ontologies = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-get_ontologies|", reasoner));
};
export const owlapi_get_ontologies_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_ontologies|", reasoner);
};
export const owlapi_get_o_w_l_annotation_assertion_axiom = (
  annotation_subject,
  annotation_property,
  annotation_value,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_annotation_assertion_axiom|",
      annotation_subject,
      annotation_property,
      annotation_value,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_annotation_assertion_axiom_ = (
  annotation_subject,
  annotation_property,
  annotation_value,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_annotation_assertion_axiom|",
    annotation_subject,
    annotation_property,
    annotation_value,
    reasoner
  );
};
export const owlapi_get_o_w_l_annotation_property_domain_axiom = (
  annotation_property,
  annotation_property_domain,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_annotation_property_domain_axiom|",
      annotation_property,
      annotation_property_domain,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_annotation_property_domain_axiom_ = (
  annotation_property,
  annotation_property_domain,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_annotation_property_domain_axiom|",
    annotation_property,
    annotation_property_domain,
    reasoner
  );
};
export const owlapi_get_o_w_l_annotation_property_range_axiom = (
  annotation_property,
  annotation_property_range,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_annotation_property_range_axiom|",
      annotation_property,
      annotation_property_range,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_annotation_property_range_axiom_ = (
  annotation_property,
  annotation_property_range,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_annotation_property_range_axiom|",
    annotation_property,
    annotation_property_range,
    reasoner
  );
};
export const owlapi_get_o_w_l_asymmetric_object_property_axiom = (
  object_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_asymmetric_object_property_axiom|",
      object_property,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_asymmetric_object_property_axiom_ = (
  object_property,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_asymmetric_object_property_axiom|",
    object_property,
    reasoner
  );
};
export const owlapi_get_o_w_l_axiom_annotation_axiom = (
  axiom_id,
  annotation,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_axiom_annotation_axiom|",
      axiom_id,
      annotation,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_axiom_annotation_axiom_ = (
  axiom_id,
  annotation,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_axiom_annotation_axiom|",
    axiom_id,
    annotation,
    reasoner
  );
};
export const owlapi_get_o_w_l_class_assertion_axiom = (
  individual,
  description,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_class_assertion_axiom|",
      individual,
      description,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_class_assertion_axiom_ = (
  individual,
  description,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_class_assertion_axiom|",
    individual,
    description,
    reasoner
  );
};
export const owlapi_get_o_w_l_data_property_assertion_axiom = (
  subject,
  rel_data_property,
  value,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_data_property_assertion_axiom|",
      subject,
      rel_data_property,
      value,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_data_property_assertion_axiom_ = (
  subject,
  rel_data_property,
  value,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_data_property_assertion_axiom|",
    subject,
    rel_data_property,
    value,
    reasoner
  );
};
export const owlapi_get_o_w_l_data_property_domain_axiom = (
  data_property,
  data_property_domain,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_data_property_domain_axiom|",
      data_property,
      data_property_domain,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_data_property_domain_axiom_ = (
  data_property,
  data_property_domain,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_data_property_domain_axiom|",
    data_property,
    data_property_domain,
    reasoner
  );
};
export const owlapi_get_o_w_l_data_property_range_axiom = (
  data_property,
  data_range,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_data_property_range_axiom|",
      data_property,
      data_range,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_data_property_range_axiom_ = (
  data_property,
  data_range,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_data_property_range_axiom|",
    data_property,
    data_range,
    reasoner
  );
};
export const owlapi_get_o_w_l_data_sub_property_axiom = (
  data_sub_property,
  data_super_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_data_sub_property_axiom|",
      data_sub_property,
      data_super_property,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_data_sub_property_axiom_ = (
  data_sub_property,
  data_super_property,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_data_sub_property_axiom|",
    data_sub_property,
    data_super_property,
    reasoner
  );
};
export const owlapi_get_o_w_l_datatype_definition_axiom = (
  datatype_name,
  data_range,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_datatype_definition_axiom|",
      datatype_name,
      data_range,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_datatype_definition_axiom_ = (
  datatype_name,
  data_range,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_datatype_definition_axiom|",
    datatype_name,
    data_range,
    reasoner
  );
};
export const owlapi_get_o_w_l_declaration_axiom = (entity, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_o_w_l_declaration_axiom|", entity, reasoner)
  );
};
export const owlapi_get_o_w_l_declaration_axiom_ = (entity, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_declaration_axiom|",
    entity,
    reasoner
  );
};
export const owlapi_get_o_w_l_different_individuals_axiom = (
  individuals,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_different_individuals_axiom|",
      individuals,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_different_individuals_axiom_ = (
  individuals,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_different_individuals_axiom|",
    individuals,
    reasoner
  );
};
export const owlapi_get_o_w_l_disjoint_classes_axiom = (
  descriptions,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_disjoint_classes_axiom|",
      descriptions,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_disjoint_classes_axiom_ = (
  descriptions,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_disjoint_classes_axiom|",
    descriptions,
    reasoner
  );
};
export const owlapi_get_o_w_l_disjoint_data_properties_axiom = (
  data_properties,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_disjoint_data_properties_axiom|",
      data_properties,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_disjoint_data_properties_axiom_ = (
  data_properties,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_disjoint_data_properties_axiom|",
    data_properties,
    reasoner
  );
};
export const owlapi_get_o_w_l_disjoint_object_properties_axiom = (
  object_properties,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_disjoint_object_properties_axiom|",
      object_properties,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_disjoint_object_properties_axiom_ = (
  object_properties,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_disjoint_object_properties_axiom|",
    object_properties,
    reasoner
  );
};
export const owlapi_get_o_w_l_disjoint_union_axiom = (
  description,
  descriptions,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_disjoint_union_axiom|",
      description,
      descriptions,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_disjoint_union_axiom_ = (
  description,
  descriptions,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_disjoint_union_axiom|",
    description,
    descriptions,
    reasoner
  );
};
export const owlapi_get_o_w_l_entity_annotation_axiom = (
  entity,
  annotation,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_entity_annotation_axiom|",
      entity,
      annotation,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_entity_annotation_axiom_ = (
  entity,
  annotation,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_entity_annotation_axiom|",
    entity,
    annotation,
    reasoner
  );
};
export const owlapi_get_o_w_l_equivalent_classes_axiom = (
  descriptions,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_equivalent_classes_axiom|",
      descriptions,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_equivalent_classes_axiom_ = (
  descriptions,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_equivalent_classes_axiom|",
    descriptions,
    reasoner
  );
};
export const owlapi_get_o_w_l_equivalent_data_properties_axiom = (
  data_properties,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_equivalent_data_properties_axiom|",
      data_properties,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_equivalent_data_properties_axiom_ = (
  data_properties,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_equivalent_data_properties_axiom|",
    data_properties,
    reasoner
  );
};
export const owlapi_get_o_w_l_equivalent_object_properties_axiom = (
  object_properties,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_equivalent_object_properties_axiom|",
      object_properties,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_equivalent_object_properties_axiom_ = (
  object_properties,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_equivalent_object_properties_axiom|",
    object_properties,
    reasoner
  );
};
export const owlapi_get_o_w_l_functional_data_property_axiom = (
  data_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_functional_data_property_axiom|",
      data_property,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_functional_data_property_axiom_ = (
  data_property,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_functional_data_property_axiom|",
    data_property,
    reasoner
  );
};
export const owlapi_get_o_w_l_functional_object_property_axiom = (
  object_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_functional_object_property_axiom|",
      object_property,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_functional_object_property_axiom_ = (
  object_property,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_functional_object_property_axiom|",
    object_property,
    reasoner
  );
};
export const owlapi_get_o_w_l_has_key_axiom = (
  key_class,
  key_object_properties,
  key_data_properties,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_has_key_axiom|",
      key_class,
      key_object_properties,
      key_data_properties,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_has_key_axiom_ = (
  key_class,
  key_object_properties,
  key_data_properties,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_has_key_axiom|",
    key_class,
    key_object_properties,
    key_data_properties,
    reasoner
  );
};
export const owlapi_get_o_w_l_implicit_declaration_axiom = (
  entity,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_implicit_declaration_axiom|",
      entity,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_implicit_declaration_axiom_ = (
  entity,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_implicit_declaration_axiom|",
    entity,
    reasoner
  );
};
export const owlapi_get_o_w_l_imports_declaration_axiom = (
  ontology_import_uri,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_imports_declaration_axiom|",
      ontology_import_uri,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_imports_declaration_axiom_ = (
  ontology_import_uri,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_imports_declaration_axiom|",
    ontology_import_uri,
    reasoner
  );
};
export const owlapi_get_o_w_l_inverse_functional_object_property_axiom = (
  object_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_inverse_functional_object_property_axiom|",
      object_property,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_inverse_functional_object_property_axiom_ = (
  object_property,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_inverse_functional_object_property_axiom|",
    object_property,
    reasoner
  );
};
export const owlapi_get_o_w_l_inverse_object_properties_axiom = (
  first_object_property,
  second_object_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_inverse_object_properties_axiom|",
      first_object_property,
      second_object_property,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_inverse_object_properties_axiom_ = (
  first_object_property,
  second_object_property,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_inverse_object_properties_axiom|",
    first_object_property,
    second_object_property,
    reasoner
  );
};
export const owlapi_get_o_w_l_irreflexive_object_property_axiom = (
  object_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_irreflexive_object_property_axiom|",
      object_property,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_irreflexive_object_property_axiom_ = (
  object_property
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_irreflexive_object_property_axiom|",
    object_property
  );
};
export const owlapi_get_o_w_l_negative_data_property_assertion_axiom = (
  subject,
  rel_data_property,
  value,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_negative_data_property_assertion_axiom|",
      subject,
      rel_data_property,
      value,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_negative_data_property_assertion_axiom_ = (
  subject,
  rel_data_property,
  value,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_negative_data_property_assertion_axiom|",
    subject,
    rel_data_property,
    value,
    reasoner
  );
};
export const owlapi_get_o_w_l_negative_object_property_assertion_axiom = (
  subject,
  rel_object_property,
  object_,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_negative_object_property_assertion_axiom|",
      subject,
      rel_object_property,
      object_,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_negative_object_property_assertion_axiom_ = (
  subject,
  rel_object_property,
  object_,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_negative_object_property_assertion_axiom|",
    subject,
    rel_object_property,
    object_,
    reasoner
  );
};
export const owlapi_get_o_w_l_object_property_assertion_axiom = (
  subject,
  rel_object_property,
  object_,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_object_property_assertion_axiom|",
      subject,
      rel_object_property,
      object_,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_object_property_assertion_axiom_ = (
  subject,
  rel_object_property,
  object_,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_object_property_assertion_axiom|",
    subject,
    rel_object_property,
    object_,
    reasoner
  );
};
export const owlapi_get_o_w_l_object_property_chain_sub_property_axiom = (
  object_property_chain,
  object_super_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_object_property_chain_sub_property_axiom|",
      object_property_chain,
      object_super_property,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_object_property_chain_sub_property_axiom_ = (
  object_property_chain,
  object_super_property,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_object_property_chain_sub_property_axiom|",
    object_property_chain,
    object_super_property,
    reasoner
  );
};
export const owlapi_get_o_w_l_object_property_domain_axiom = (
  object_property,
  object_property_domain,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_object_property_domain_axiom|",
      object_property,
      object_property_domain,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_object_property_domain_axiom_ = (
  object_property,
  object_property_domain,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_object_property_domain_axiom|",
    object_property,
    object_property_domain,
    reasoner
  );
};
export const owlapi_get_o_w_l_object_property_range_axiom = (
  object_property,
  object_property_range,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_object_property_range_axiom|",
      object_property,
      object_property_range,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_object_property_range_axiom_ = (
  object_property,
  object_property_range,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_object_property_range_axiom|",
    object_property,
    object_property_range,
    reasoner
  );
};
export const owlapi_get_o_w_l_object_sub_property_axiom = (
  object_sub_property,
  object_super_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_object_sub_property_axiom|",
      object_sub_property,
      object_super_property,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_object_sub_property_axiom_ = (
  object_sub_property,
  object_super_property,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_object_sub_property_axiom|",
    object_sub_property,
    object_super_property,
    reasoner
  );
};
export const owlapi_get_o_w_l_ontology_annotation_axiom = (
  annotation,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_ontology_annotation_axiom|",
      annotation,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_ontology_annotation_axiom_ = (
  annotation,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_ontology_annotation_axiom|",
    annotation,
    reasoner
  );
};
export const owlapi_get_o_w_l_ontology_version_declaration_axiom = (
  ontology_version_uri,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_ontology_version_declaration_axiom|",
      ontology_version_uri,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_ontology_version_declaration_axiom_ = (
  ontology_version_uri,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_ontology_version_declaration_axiom|",
    ontology_version_uri,
    reasoner
  );
};
export const owlapi_get_o_w_l_prefix_declaration_axiom = (
  namespace_prefix,
  namespace,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_prefix_declaration_axiom|",
      namespace_prefix,
      namespace,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_prefix_declaration_axiom_ = (
  namespace_prefix,
  namespace,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_prefix_declaration_axiom|",
    namespace_prefix,
    namespace,
    reasoner
  );
};
export const owlapi_get_o_w_l_really_implicit_declaration_axiom = (
  entity,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_really_implicit_declaration_axiom|",
      entity,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_really_implicit_declaration_axiom_ = (
  entity,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_really_implicit_declaration_axiom|",
    entity,
    reasoner
  );
};
export const owlapi_get_o_w_l_reflexive_object_property_axiom = (
  object_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_reflexive_object_property_axiom|",
      object_property,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_reflexive_object_property_axiom_ = (
  object_property,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_reflexive_object_property_axiom|",
    object_property,
    reasoner
  );
};
export const owlapi_get_o_w_l_same_individuals_axiom = (
  individuals,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_same_individuals_axiom|",
      individuals,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_same_individuals_axiom_ = (
  individuals,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_same_individuals_axiom|",
    individuals,
    reasoner
  );
};
export const owlapi_get_o_w_l_sub_annotation_property_axiom = () => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_o_w_l_sub_annotation_property_axiom|")
  );
};
export const owlapi_get_o_w_l_sub_annotation_property_axiom_ = () => {
  return racerCall("|_o_w_l_a_p_i-get_o_w_l_sub_annotation_property_axiom|");
};
export const owlapi_get_o_w_l_sub_annotation_property_of_axiom = (
  annotation_sub_property,
  annotation_super_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_sub_annotation_property_of_axiom|",
      annotation_sub_property,
      annotation_super_property,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_sub_annotation_property_of_axiom_ = (
  annotation_sub_property,
  annotation_super_property,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_sub_annotation_property_of_axiom|",
    annotation_sub_property,
    annotation_super_property,
    reasoner
  );
};
export const owlapi_get_o_w_l_sub_class_axiom = (
  sub_class,
  super_class,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_sub_class_axiom|",
      sub_class,
      super_class,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_sub_class_axiom_ = (
  sub_class,
  super_class,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_sub_class_axiom|",
    sub_class,
    super_class,
    reasoner
  );
};
export const owlapi_get_o_w_l_symmetric_object_property_axiom = (
  object_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_symmetric_object_property_axiom|",
      object_property,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_symmetric_object_property_axiom_ = (
  object_property,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_symmetric_object_property_axiom|",
    object_property,
    reasoner
  );
};
export const owlapi_get_o_w_l_transitive_object_property_axiom = (
  object_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_o_w_l_transitive_object_property_axiom|",
      object_property,
      reasoner
    )
  );
};
export const owlapi_get_o_w_l_transitive_object_property_axiom_ = (
  object_property,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_o_w_l_transitive_object_property_axiom|",
    object_property,
    reasoner
  );
};
export const owlapi_get_prefixes = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-get_prefixes|", reasoner));
};
export const owlapi_get_prefixes_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_prefixes|", reasoner);
};
export const owlapi_get_ranges = (property_, reasoner, owlapi_hacking_mode) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_ranges|",
      property_,
      reasoner,
      owlapi_hacking_mode
    )
  );
};
export const owlapi_get_ranges_ = (
  property_,
  reasoner,
  owlapi_hacking_mode
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_ranges|",
    property_,
    reasoner,
    owlapi_hacking_mode
  );
};
export const owlapi_get_reasoners = () => {
  return String(racerCall("|_o_w_l_a_p_i-get_reasoners|"));
};
export const owlapi_get_reasoners_ = () => {
  return racerCall("|_o_w_l_a_p_i-get_reasoners|");
};
export const owlapi_get_related_individuals = (
  subject,
  object_property,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_related_individuals|",
      subject,
      object_property,
      reasoner
    )
  );
};
export const owlapi_get_related_individuals_ = (subject, object_property) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_related_individuals|",
    subject,
    object_property
  );
};
export const owlapi_get_related_values = (subject, data_property, reasoner) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-get_related_values|",
      subject,
      data_property,
      reasoner
    )
  );
};
export const owlapi_get_related_values_ = (
  subject,
  data_property,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-get_related_values|",
    subject,
    data_property,
    reasoner
  );
};
export const owlapi_get_same_individuals = (ind, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_same_individuals|", ind, reasoner)
  );
};
export const owlapi_get_same_individuals_ = (ind, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_same_individuals|", ind, reasoner);
};
export const owlapi_get_sub_classes = (cls, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-get_sub_classes|", cls, reasoner));
};
export const owlapi_get_sub_classes_ = (cls, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_sub_classes|", cls, reasoner);
};
export const owlapi_get_sub_properties = (property_, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_sub_properties|", property_, reasoner)
  );
};
export const owlapi_get_sub_properties_ = (property_, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_sub_properties|", property_, reasoner);
};
export const owlapi_get_super_classes = (cls, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-get_super_classes|", cls, reasoner));
};
export const owlapi_get_super_classes_ = (cls, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_super_classes|", cls, reasoner);
};
export const owlapi_get_super_properties = (property_, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_super_properties|", property_, reasoner)
  );
};
export const owlapi_get_super_properties_ = (property_, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_super_properties|", property_, reasoner);
};
export const owlapi_get_types = (individual, direct, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_types|", individual, direct, reasoner)
  );
};
export const owlapi_get_types_ = (individual, direct, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_types|", individual, direct, reasoner);
};
export const owlapi_has_data_property_relationship = (
  subject,
  property_,
  object_,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-has_data_property_relationship|",
      subject,
      property_,
      object_,
      reasoner
    )
  );
};
export const owlapi_has_data_property_relationship_ = (
  subject,
  property_,
  object_,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-has_data_property_relationship|",
    subject,
    property_,
    object_,
    reasoner
  );
};
export const owlapi_has_object_property_relationship = (
  subject,
  property_,
  object_,
  reasoner
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-has_object_property_relationship|",
      subject,
      property_,
      object_,
      reasoner
    )
  );
};
export const owlapi_has_object_property_relationship_ = (
  subject,
  property_,
  object_,
  reasoner
) => {
  return racerCall(
    "|_o_w_l_a_p_i-has_object_property_relationship|",
    subject,
    property_,
    object_,
    reasoner
  );
};
export const owlapi_has_type = (ind, type_, direct, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-has_type|", ind, type_, direct, reasoner)
  );
};
export const owlapi_has_type_ = (ind, type_, direct, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-has_type|", ind, type_, direct, reasoner);
};
export const owlapi_i_d_to_axiom = (id, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-_i_d_to_axiom|", id, reasoner));
};
export const owlapi_i_d_to_axiom_ = (id, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-_i_d_to_axiom|", id, reasoner);
};
export const owlapi_ignore_annotations = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-ignore_annotations|", reasoner));
};
export const owlapi_ignore_annotations_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-ignore_annotations|", reasoner);
};
export const owlapi_ignore_declarations = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-ignore_declarations|", reasoner));
};
export const owlapi_ignore_declarations_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-ignore_declarations|", reasoner);
};
export const owlapi_is_asymmetric = (property_, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-is_asymmetric|", property_, reasoner));
};
export const owlapi_is_asymmetric_ = (property_, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_asymmetric|", property_, reasoner);
};
export const owlapi_is_class = (clsc, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-is_class|", clsc, reasoner));
};
export const owlapi_is_class_ = (clsc, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_class|", clsc, reasoner);
};
export const owlapi_is_classified = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-is_classified|", reasoner));
};
export const owlapi_is_classified_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_classified|", reasoner);
};
export const owlapi_is_consistent = (ontology, reasoner, force_p) => {
  return String(
    racerCall("|_o_w_l_a_p_i-is_consistent|", ontology, reasoner, force_p)
  );
};
export const owlapi_is_consistent_ = (ontology, reasoner, force_p) => {
  return racerCall("|_o_w_l_a_p_i-is_consistent|", ontology, reasoner, force_p);
};
export const owlapi_is_defined_class = (cls, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-is_defined_class|", cls, reasoner));
};
export const owlapi_is_defined_class_ = (cls, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_defined_class|", cls, reasoner);
};
export const owlapi_is_defined_data_property = (property_, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-is_defined_data_property|", property_, reasoner)
  );
};
export const owlapi_is_defined_data_property_ = (property_, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-is_defined_data_property|",
    property_,
    reasoner
  );
};
export const owlapi_is_defined_individual = (ind, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-is_defined_individual|", ind, reasoner)
  );
};
export const owlapi_is_defined_individual_ = (ind, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_defined_individual|", ind, reasoner);
};
export const owlapi_is_defined_object_property = (property_, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-is_defined_object_property|", property_, reasoner)
  );
};
export const owlapi_is_defined_object_property_ = (property_, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-is_defined_object_property|",
    property_,
    reasoner
  );
};
export const owlapi_is_different_individual = (i, j, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-is_different_individual|", i, j, reasoner)
  );
};
export const owlapi_is_different_individual_ = (i, j, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_different_individual|", i, j, reasoner);
};
export const owlapi_is_entailed = (axiom_id_or_constructor, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-is_entailed|", axiom_id_or_constructor, reasoner)
  );
};
export const owlapi_is_entailed_ = (axiom_id_or_constructor, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-is_entailed|",
    axiom_id_or_constructor,
    reasoner
  );
};
export const owlapi_is_equivalent_class = (clsc, clsd, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-is_equivalent_class|", clsc, clsd, reasoner)
  );
};
export const owlapi_is_equivalent_class_ = (clsc, clsd, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_equivalent_class|", clsc, clsd, reasoner);
};
export const owlapi_is_functional = (property_, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-is_functional|", property_, reasoner));
};
export const owlapi_is_functional_ = (property_, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_functional|", property_, reasoner);
};
export const owlapi_is_inverse_functional = (property_, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-is_inverse_functional|", property_, reasoner)
  );
};
export const owlapi_is_inverse_functional_ = (property_, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_inverse_functional|", property_, reasoner);
};
export const owlapi_is_irreflexive = (property_, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-is_irreflexive|", property_, reasoner)
  );
};
export const owlapi_is_irreflexive_ = (property_, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_irreflexive|", property_, reasoner);
};
export const owlapi_is_realised = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-is_realised|", reasoner));
};
export const owlapi_is_realised_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_realised|", reasoner);
};
export const owlapi_is_reflexive = (property_, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-is_reflexive|", property_, reasoner));
};
export const owlapi_is_reflexive_ = (property_, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_reflexive|", property_, reasoner);
};
export const owlapi_is_same_individual = (i, j, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-is_same_individual|", i, j, reasoner));
};
export const owlapi_is_same_individual_ = (i, j, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_same_individual|", i, j, reasoner);
};
export const owlapi_is_satisfiable = (description, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-is_satisfiable|", description, reasoner)
  );
};
export const owlapi_is_satisfiable_ = (description, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_satisfiable|", description, reasoner);
};
export const owlapi_is_sub_class_of = (clsc, clsd, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-is_sub_class_of|", clsc, clsd, reasoner)
  );
};
export const owlapi_is_sub_class_of_ = (clsc, clsd, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_sub_class_of|", clsc, clsd, reasoner);
};
export const owlapi_is_symmetric = (property_, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-is_symmetric|", property_, reasoner));
};
export const owlapi_is_symmetric_ = (property_, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_symmetric|", property_, reasoner);
};
export const owlapi_is_transitive = (property_, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-is_transitive|", property_, reasoner));
};
export const owlapi_is_transitive_ = (property_, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-is_transitive|", property_, reasoner);
};
export const owlapi_keep_annotations = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-keep_annotations|", reasoner));
};
export const owlapi_keep_annotations_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-keep_annotations|", reasoner);
};
export const owlapi_load_axiom = (ont, axiom, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-load_axiom|", ont, axiom, reasoner));
};
export const owlapi_load_axiom_ = (ont, axiom, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-load_axiom|", ont, axiom, reasoner);
};
export const owlapi_load_axioms = (ont, axioms, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-load_axioms|", ont, axioms, reasoner));
};
export const owlapi_load_axioms_ = (ont, axioms, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-load_axioms|", ont, axioms, reasoner);
};
export const owlapi_load_ontologies = (ontologies, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-load_ontologies|", ontologies, reasoner)
  );
};
export const owlapi_load_ontologies_ = (ontologies, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-load_ontologies|", ontologies, reasoner);
};
export const owlapi_load_ontology = (ontology, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-load_ontology|", ontology, reasoner));
};
export const owlapi_load_ontology_ = (ontology, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-load_ontology|", ontology, reasoner);
};
export const owlapi_manually_apply_changes = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-manually_apply_changes|", reasoner));
};
export const owlapi_manually_apply_changes_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-manually_apply_changes|", reasoner);
};
export const owlapi_merge_ontologies = (ont1, ont2, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-merge_ontologies|", ont1, ont2, reasoner)
  );
};
export const owlapi_merge_ontologies_ = (ont1, ont2, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-merge_ontologies|", ont1, ont2, reasoner);
};
export const owlapi_new_ontology = (name, reasoner, secondary_p) => {
  return String(
    racerCall("|_o_w_l_a_p_i-new_ontology|", name, reasoner, secondary_p)
  );
};
export const owlapi_new_ontology_ = (name, reasoner, secondary_p) => {
  return racerCall("|_o_w_l_a_p_i-new_ontology|", name, reasoner, secondary_p);
};
export const owlapi_new_reasoner = (
  owlapi_reasoner_name,
  make_racer_kb_current_p,
  init,
  owlapi_tbox,
  owlapi_abox,
  own_racer_p
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-new_reasoner|",
      owlapi_reasoner_name,
      make_racer_kb_current_p,
      init,
      owlapi_tbox,
      owlapi_abox,
      own_racer_p
    )
  );
};
export const owlapi_new_reasoner_ = (
  owlapi_reasoner_name,
  make_racer_kb_current_p,
  init,
  owlapi_tbox,
  owlapi_abox,
  own_racer_p
) => {
  return racerCall(
    "|_o_w_l_a_p_i-new_reasoner|",
    owlapi_reasoner_name,
    make_racer_kb_current_p,
    init,
    owlapi_tbox,
    owlapi_abox,
    own_racer_p
  );
};
export const owlapi_new_reasoner1 = (
  owlapi_reasoner_name,
  make_racer_kb_current_p,
  init,
  owlapi_tbox,
  owlapi_abox
) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-new_reasoner1|",
      owlapi_reasoner_name,
      make_racer_kb_current_p,
      init,
      owlapi_tbox,
      owlapi_abox
    )
  );
};
export const owlapi_new_reasoner1_ = (
  owlapi_reasoner_name,
  make_racer_kb_current_p,
  init,
  owlapi_tbox,
  owlapi_abox
) => {
  return racerCall(
    "|_o_w_l_a_p_i-new_reasoner1|",
    owlapi_reasoner_name,
    make_racer_kb_current_p,
    init,
    owlapi_tbox,
    owlapi_abox
  );
};
export const owlapi_next_axiom_use_i_d = (id, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-next_axiom_use_i_d|", id, reasoner));
};
export const owlapi_next_axiom_use_i_d_ = (id, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-next_axiom_use_i_d|", id, reasoner);
};
export const owlapi_parse_native = (string, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-parse_native|", string, reasoner));
};
export const owlapi_parse_native_ = (string, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-parse_native|", string, reasoner);
};
export const owlapi_read_functional_ontology_document = (key_args) => {
  return String(
    racerCall("|_o_w_l_a_p_i-read_functional_ontology_document|", key_args)
  );
};
export const owlapi_read_functional_ontology_document_ = (key_args) => {
  return racerCall(
    "|_o_w_l_a_p_i-read_functional_ontology_document|",
    key_args
  );
};
export const owlapi_read_functional_ontology_file = (key_args) => {
  return String(
    racerCall("|_o_w_l_a_p_i-read_functional_ontology_file|", key_args)
  );
};
export const owlapi_read_functional_ontology_file_ = (key_args) => {
  return racerCall("|_o_w_l_a_p_i-read_functional_ontology_file|", key_args);
};
export const owlapi_read_ontology = (key_args) => {
  return String(racerCall("|_o_w_l_a_p_i-read_ontology|", key_args));
};
export const owlapi_read_ontology_ = (key_args) => {
  return racerCall("|_o_w_l_a_p_i-read_ontology|", key_args);
};
export const owlapi_read_x_m_l_ontology_document = (key_args) => {
  return String(
    racerCall("|_o_w_l_a_p_i-read_x_m_l_ontology_document|", key_args)
  );
};
export const owlapi_read_x_m_l_ontology_document_ = (key_args) => {
  return racerCall("|_o_w_l_a_p_i-read_x_m_l_ontology_document|", key_args);
};
export const owlapi_read_x_m_l_ontology_file = (key_args) => {
  return String(racerCall("|_o_w_l_a_p_i-read_x_m_l_ontology_file|", key_args));
};
export const owlapi_read_x_m_l_ontology_file_ = (key_args) => {
  return racerCall("|_o_w_l_a_p_i-read_x_m_l_ontology_file|", key_args);
};
export const owlapi_register_declared_entities = (reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-register_declared_entities|", reasoner)
  );
};
export const owlapi_register_declared_entities_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-register_declared_entities|", reasoner);
};
export const owlapi_register_last_answer = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-register_last_answer|", reasoner));
};
export const owlapi_register_last_answer_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-register_last_answer|", reasoner);
};
export const owlapi_register_object = (obj) => {
  return String(racerCall("|_o_w_l_a_p_i-register_object|", obj));
};
export const owlapi_register_object_ = (obj) => {
  return racerCall("|_o_w_l_a_p_i-register_object|", obj);
};
export const owlapi_register_referenced_entities = (reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-register_referenced_entities|", reasoner)
  );
};
export const owlapi_register_referenced_entities_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-register_referenced_entities|", reasoner);
};
export const owlapi_reload_loaded_ontologies = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-reload_loaded_ontologies|", reasoner));
};
export const owlapi_reload_loaded_ontologies_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-reload_loaded_ontologies|", reasoner);
};
export const owlapi_remove_axiom = () => {
  return String(racerCall("|_o_w_l_a_p_i-remove_axiom|"));
};
export const owlapi_remove_axiom_ = () => {
  return racerCall("|_o_w_l_a_p_i-remove_axiom|");
};
export const owlapi_remove_axioms = () => {
  return String(racerCall("|_o_w_l_a_p_i-remove_axioms|"));
};
export const owlapi_remove_axioms_ = () => {
  return racerCall("|_o_w_l_a_p_i-remove_axioms|");
};
export const owlapi_remove_prefix = (prefix, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-remove_prefix|", prefix, reasoner));
};
export const owlapi_remove_prefix_ = (prefix, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-remove_prefix|", prefix, reasoner);
};
export const owlapi_reset_axiom_counter = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-reset_axiom_counter|", reasoner));
};
export const owlapi_reset_axiom_counter_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-reset_axiom_counter|", reasoner);
};
export const owlapi_restore_image = (fn) => {
  return String(racerCall("|_o_w_l_a_p_i-restore_image|", fn));
};
export const owlapi_restore_image_ = (fn) => {
  return racerCall("|_o_w_l_a_p_i-restore_image|", fn);
};
export const owlapi_save_ontology = (key_args) => {
  return String(racerCall("|_o_w_l_a_p_i-save_ontology|", key_args));
};
export const owlapi_save_ontology_ = (key_args) => {
  return racerCall("|_o_w_l_a_p_i-save_ontology|", key_args);
};
export const owlapi_set_auto_declare_data_properties = (val, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-set_auto_declare_data_properties|", val, reasoner)
  );
};
export const owlapi_set_auto_declare_data_properties_ = (val, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-set_auto_declare_data_properties|",
    val,
    reasoner
  );
};
export const owlapi_set_axiom_counter = (n, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-set_axiom_counter|", n, reasoner));
};
export const owlapi_set_axiom_counter_ = (n, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-set_axiom_counter|", n, reasoner);
};
export const owlapi_set_current_reasoner = (name, make_racer_kb_current_p) => {
  return String(
    racerCall(
      "|_o_w_l_a_p_i-set_current_reasoner|",
      name,
      make_racer_kb_current_p
    )
  );
};
export const owlapi_set_current_reasoner_ = (name, make_racer_kb_current_p) => {
  return racerCall(
    "|_o_w_l_a_p_i-set_current_reasoner|",
    name,
    make_racer_kb_current_p
  );
};
export const owlapi_set_ontology_u_r_i = (ont, uri, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-_set_ontology_u_r_i|", ont, uri, reasoner)
  );
};
export const owlapi_set_ontology_u_r_i_ = (ont, uri, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-_set_ontology_u_r_i|", ont, uri, reasoner);
};
export const owlapi_set_progress = (n, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-set_progress|", n, reasoner));
};
export const owlapi_set_progress_ = (n, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-set_progress|", n, reasoner);
};
export const owlapi_set_progress_range = (steps, from_, to, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-set_progress_range|", steps, from_, to, reasoner)
  );
};
export const owlapi_set_progress_range_ = (steps, from_, to, reasoner) => {
  return racerCall(
    "|_o_w_l_a_p_i-set_progress_range|",
    steps,
    from_,
    to,
    reasoner
  );
};
export const owlapi_set_return_policy = (type_, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-set_return_policy|", type_, reasoner));
};
export const owlapi_set_return_policy_ = (type_, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-set_return_policy|", type_, reasoner);
};
export const owlapi_store_image = (fn, reasoners) => {
  return String(racerCall("|_o_w_l_a_p_i-store_image|", fn, reasoners));
};
export const owlapi_store_image_ = (fn, reasoners) => {
  return racerCall("|_o_w_l_a_p_i-store_image|", fn, reasoners);
};
export const owlapi_unload_axiom = (ont, axiom, reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-unload_axiom|", ont, axiom, reasoner));
};
export const owlapi_unload_axiom_ = (ont, axiom, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-unload_axiom|", ont, axiom, reasoner);
};
export const owlapi_unload_axioms = (ont, axioms, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-unload_axioms|", ont, axioms, reasoner)
  );
};
export const owlapi_unload_axioms_ = (ont, axioms, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-unload_axioms|", ont, axioms, reasoner);
};
export const owlapi_unload_ontologies = (ontologies, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-unload_ontologies|", ontologies, reasoner)
  );
};
export const owlapi_unload_ontologies_ = (ontologies, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-unload_ontologies|", ontologies, reasoner);
};
export const owlapi_unload_ontology = (ontology, reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-unload_ontology|", ontology, reasoner)
  );
};
export const owlapi_unload_ontology_ = (ontology, reasoner) => {
  return racerCall("|_o_w_l_a_p_i-unload_ontology|", ontology, reasoner);
};
export const owlapi_uses_incremental_updates = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-uses_incremental_updates|", reasoner));
};
export const owlapi_uses_incremental_updates_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-uses_incremental_updates|", reasoner);
};
export const owlapi_uses_simplified_protocol = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-uses_simplified_protocol|", reasoner));
};
export const owlapi_uses_simplified_protocol_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-uses_simplified_protocol|", reasoner);
};
export const owlapi_write_functional_ontology_file = (key_args) => {
  return String(
    racerCall("|_o_w_l_a_p_i-write_functional_ontology_file|", key_args)
  );
};
export const owlapi_write_functional_ontology_file_ = (key_args) => {
  return racerCall("|_o_w_l_a_p_i-write_functional_ontology_file|", key_args);
};
export const owlapi_write_ontology_file = (key_args) => {
  return String(racerCall("|_o_w_l_a_p_i-write_ontology_file|", key_args));
};
export const owlapi_write_ontology_file_ = (key_args) => {
  return racerCall("|_o_w_l_a_p_i-write_ontology_file|", key_args);
};
export const owlapi_write_x_m_l_ontology_file = (key_args) => {
  return String(
    racerCall("|_o_w_l_a_p_i-write_x_m_l_ontology_file|", key_args)
  );
};
export const owlapi_write_x_m_l_ontology_file_ = (key_args) => {
  return racerCall("|_o_w_l_a_p_i-write_x_m_l_ontology_file|", key_args);
};
export const owllink_read_document = (key_args) => {
  return String(racerCall("owllink-read-document", key_args));
};
export const owllink_read_document_ = (key_args) => {
  return racerCall("owllink-read-document", key_args);
};
export const owllink_read_file = (key_args) => {
  return String(racerCall("owllink-read-file", key_args));
};
export const owllink_read_file_ = (key_args) => {
  return racerCall("owllink-read-file", key_args);
};
export const pracer_answer_query = (key_args) => {
  return String(racerCall("pracer-answer-query", key_args));
};
export const pracer_answer_query_ = (key_args) => {
  return racerCall("pracer-answer-query", key_args);
};
export const prefer_defined_queries = () => {
  return String(racerCall("prefer-defined-queries"));
};
export const prefer_defined_queries_ = () => {
  return racerCall("prefer-defined-queries");
};
export const prepare_abox = (abox) => {
  return String(racerCall("prepare-abox", abox));
};
export const prepare_abox_ = (abox) => {
  return racerCall("prepare-abox", abox);
};
export const prepare_nrql_engine = (key_args) => {
  return String(racerCall("prepare-nrql-engine", key_args));
};
export const prepare_nrql_engine_ = (key_args) => {
  return racerCall("prepare-nrql-engine", key_args);
};
export const prepare_query = (key_args) => {
  return String(racerCall("prepare-query", key_args));
};
export const prepare_query_ = (key_args) => {
  return racerCall("prepare-query", key_args);
};
export const prepare_query1 = (key_args) => {
  return String(racerCall("prepare-query1", key_args));
};
export const prepare_query1_ = (key_args) => {
  return racerCall("prepare-query1", key_args);
};
export const prepare_racer_engine = (key_args) => {
  return String(racerCall("prepare-racer-engine", key_args));
};
export const prepare_racer_engine_ = (key_args) => {
  return racerCall("prepare-racer-engine", key_args);
};
export const prepare_rule = (key_args) => {
  return String(racerCall("prepare-rule", key_args));
};
export const prepare_rule_ = (key_args) => {
  return racerCall("prepare-rule", key_args);
};
export const prepare_rule1 = (key_args) => {
  return String(racerCall("prepare-rule1", key_args));
};
export const prepare_rule1_ = (key_args) => {
  return racerCall("prepare-rule1", key_args);
};
export const prepared_queries = (key_args) => {
  return String(racerCall("prepared-queries", key_args));
};
export const prepared_queries_ = (key_args) => {
  return racerCall("prepared-queries", key_args);
};
export const prepared_rules = (key_args) => {
  return String(racerCall("prepared-rules", key_args));
};
export const prepared_rules_ = (key_args) => {
  return racerCall("prepared-rules", key_args);
};
export const print_abox_individuals = (key_args) => {
  return String(racerCall("print-abox-individuals", key_args));
};
export const print_abox_individuals_ = (key_args) => {
  return racerCall("print-abox-individuals", key_args);
};
export const print_tbox_tree = (tbox, stream, hide_role_inverses) => {
  return String(racerCall("print-tbox-tree", tbox, stream, hide_role_inverses));
};
export const print_tbox_tree_ = (tbox, stream, hide_role_inverses) => {
  return racerCall("print-tbox-tree", tbox, stream, hide_role_inverses);
};
export const process_set_at_a_time = () => {
  return String(racerCall("process-set-at-a-time"));
};
export const process_set_at_a_time_ = () => {
  return racerCall("process-set-at-a-time");
};
export const process_tuple_at_a_time = () => {
  return String(racerCall("process-tuple-at-a-time"));
};
export const process_tuple_at_a_time_ = () => {
  return racerCall("process-tuple-at-a-time");
};
export const processed_queries = (key_args) => {
  return String(racerCall("processed-queries", key_args));
};
export const processed_queries_ = (key_args) => {
  return racerCall("processed-queries", key_args);
};
export const processed_rules = (key_args) => {
  return String(racerCall("processed-rules", key_args));
};
export const processed_rules_ = (key_args) => {
  return racerCall("processed-rules", key_args);
};
export const publish1 = (individual, abox) => {
  return String(racerCall("publish-1", individual, abox));
};
export const publish1_ = (individual, abox) => {
  return racerCall("publish-1", individual, abox);
};
export const publish_file = (filename, url, content_type) => {
  return String(racerCall("publish-file", filename, url, content_type));
};
export const publish_file_ = (filename, url, content_type) => {
  return racerCall("publish-file", filename, url, content_type);
};
export const query_accurate_p = (query) => {
  return Boolean(racerCall("query-accurate-p", query));
};
export const query_active_p = (query) => {
  return Boolean(racerCall("query-active-p", query));
};
export const query_ancestors = (query) => {
  return String(racerCall("query-ancestors", query));
};
export const query_ancestors_ = (query) => {
  return racerCall("query-ancestors", query);
};
export const query_body = (query) => {
  return String(racerCall("query-body", query));
};
export const query_body_ = (query) => {
  return racerCall("query-body", query);
};
export const query_children = (query) => {
  return String(racerCall("query-children", query));
};
export const query_children_ = (query) => {
  return racerCall("query-children", query);
};
export const query_consistent_p = (query) => {
  return Boolean(racerCall("query-consistent-p", query));
};
export const query_descendants = (query) => {
  return String(racerCall("query-descendants", query));
};
export const query_descendants_ = (query) => {
  return racerCall("query-descendants", query);
};
export const query_entails_p = (a, b) => {
  return Boolean(racerCall("query-entails-p", a, b));
};
export const query_equivalent_p = (a, b) => {
  return Boolean(racerCall("query-equivalent-p", a, b));
};
export const query_equivalents = (query) => {
  return String(racerCall("query-equivalents", query));
};
export const query_equivalents_ = (query) => {
  return racerCall("query-equivalents", query);
};
export const query_head = (query) => {
  return String(racerCall("query-head", query));
};
export const query_head_ = (query) => {
  return racerCall("query-head", query);
};
export const query_parents = (query) => {
  return String(racerCall("query-parents", query));
};
export const query_parents_ = (query) => {
  return racerCall("query-parents", query);
};
export const query_prepared_p = (query) => {
  return Boolean(racerCall("query-prepared-p", query));
};
export const query_processed_p = (query) => {
  return Boolean(racerCall("query-processed-p", query));
};
export const query_ready_p = (query) => {
  return Boolean(racerCall("query-ready-p", query));
};
export const query_running_p = (query) => {
  return Boolean(racerCall("query-running-p", query));
};
export const query_sleeping_p = (query) => {
  return Boolean(racerCall("query-sleeping-p", query));
};
export const query_subscribers = (query) => {
  return String(racerCall("query-subscribers", query));
};
export const query_subscribers_ = (query) => {
  return racerCall("query-subscribers", query);
};
export const query_terminated_p = (query) => {
  return Boolean(racerCall("query-terminated-p", query));
};
export const query_waiting_p = (query) => {
  return Boolean(racerCall("query-waiting-p", query));
};
export const racer_answer_query = (key_args) => {
  return String(racerCall("racer-answer-query", key_args));
};
export const racer_answer_query_ = (key_args) => {
  return racerCall("racer-answer-query", key_args);
};
export const racer_answer_query_under_premise = (key_args) => {
  return String(racerCall("racer-answer-query-under-premise", key_args));
};
export const racer_answer_query_under_premise_ = (key_args) => {
  return racerCall("racer-answer-query-under-premise", key_args);
};
export const racer_answer_query_under_premise1 = (key_args) => {
  return String(racerCall("racer-answer-query-under-premise1", key_args));
};
export const racer_answer_query_under_premise1_ = (key_args) => {
  return racerCall("racer-answer-query-under-premise1", key_args);
};
export const racer_answer_query_with_explanation = (key_args) => {
  return String(racerCall("racer-answer-query-with-explanation", key_args));
};
export const racer_answer_query_with_explanation_ = (key_args) => {
  return racerCall("racer-answer-query-with-explanation", key_args);
};
export const racer_answer_query1 = (key_args) => {
  return String(racerCall("racer-answer-query1", key_args));
};
export const racer_answer_query1_ = (key_args) => {
  return racerCall("racer-answer-query1", key_args);
};
export const racer_answer_tbox_query = (key_args) => {
  return String(racerCall("racer-answer-tbox-query", key_args));
};
export const racer_answer_tbox_query_ = (key_args) => {
  return racerCall("racer-answer-tbox-query", key_args);
};
export const racer_answer_tbox_query1 = (key_args) => {
  return String(racerCall("racer-answer-tbox-query1", key_args));
};
export const racer_answer_tbox_query1_ = (key_args) => {
  return racerCall("racer-answer-tbox-query1", key_args);
};
export const racer_apply_rule = (key_args) => {
  return String(racerCall("racer-apply-rule", key_args));
};
export const racer_apply_rule_ = (key_args) => {
  return racerCall("racer-apply-rule", key_args);
};
export const racer_apply_rule_under_premise = (key_args) => {
  return String(racerCall("racer-apply-rule-under-premise", key_args));
};
export const racer_apply_rule_under_premise_ = (key_args) => {
  return racerCall("racer-apply-rule-under-premise", key_args);
};
export const racer_apply_rule_under_premise1 = (key_args) => {
  return String(racerCall("racer-apply-rule-under-premise1", key_args));
};
export const racer_apply_rule_under_premise1_ = (key_args) => {
  return racerCall("racer-apply-rule-under-premise1", key_args);
};
export const racer_apply_rule1 = (key_args) => {
  return String(racerCall("racer-apply-rule1", key_args));
};
export const racer_apply_rule1_ = (key_args) => {
  return racerCall("racer-apply-rule1", key_args);
};
export const racer_prepare_query = (key_args) => {
  return String(racerCall("racer-prepare-query", key_args));
};
export const racer_prepare_query_ = (key_args) => {
  return racerCall("racer-prepare-query", key_args);
};
export const racer_prepare_query1 = (key_args) => {
  return String(racerCall("racer-prepare-query1", key_args));
};
export const racer_prepare_query1_ = (key_args) => {
  return racerCall("racer-prepare-query1", key_args);
};
export const racer_prepare_rule = (key_args) => {
  return String(racerCall("racer-prepare-rule", key_args));
};
export const racer_prepare_rule_ = (key_args) => {
  return racerCall("racer-prepare-rule", key_args);
};
export const racer_prepare_rule1 = (key_args) => {
  return String(racerCall("racer-prepare-rule1", key_args));
};
export const racer_prepare_rule1_ = (key_args) => {
  return racerCall("racer-prepare-rule1", key_args);
};
export const racer_prepare_tbox_query = (key_args) => {
  return String(racerCall("racer-prepare-tbox-query", key_args));
};
export const racer_prepare_tbox_query_ = (key_args) => {
  return racerCall("racer-prepare-tbox-query", key_args);
};
export const racer_prepare_tbox_query1 = (key_args) => {
  return String(racerCall("racer-prepare-tbox-query1", key_args));
};
export const racer_prepare_tbox_query1_ = (key_args) => {
  return racerCall("racer-prepare-tbox-query1", key_args);
};
export const racer_read_document = (key_args) => {
  return String(racerCall("racer-read-document", key_args));
};
export const racer_read_document_ = (key_args) => {
  return racerCall("racer-read-document", key_args);
};
export const racer_read_file = (filename) => {
  return String(racerCall("racer-read-file", filename));
};
export const racer_read_file_ = (filename) => {
  return racerCall("racer-read-file", filename);
};
export const rcc_consistent_p = (abox, type_of_substrate) => {
  return Boolean(racerCall("rcc-consistent-p", abox, type_of_substrate));
};
export const rcc_edge_description1 = () => {
  return String(racerCall("rcc-edge-description1"));
};
export const rcc_edge_description1_ = () => {
  return racerCall("rcc-edge-description1");
};
export const rcc_edge_label1 = () => {
  return String(racerCall("rcc-edge-label1"));
};
export const rcc_edge_label1_ = () => {
  return racerCall("rcc-edge-label1");
};
export const rcc_edge1 = () => {
  return String(racerCall("rcc-edge1"));
};
export const rcc_edge1_ = () => {
  return racerCall("rcc-edge1");
};
export const rcc_instance1 = () => {
  return String(racerCall("rcc-instance1"));
};
export const rcc_instance1_ = () => {
  return racerCall("rcc-instance1");
};
export const rcc_node_description1 = () => {
  return String(racerCall("rcc-node-description1"));
};
export const rcc_node_description1_ = () => {
  return racerCall("rcc-node-description1");
};
export const rcc_node_label1 = () => {
  return String(racerCall("rcc-node-label1"));
};
export const rcc_node_label1_ = () => {
  return racerCall("rcc-node-label1");
};
export const rcc_node1 = () => {
  return String(racerCall("rcc-node1"));
};
export const rcc_node1_ = () => {
  return racerCall("rcc-node1");
};
export const rcc_related1 = () => {
  return String(racerCall("rcc-related1"));
};
export const rcc_related1_ = () => {
  return racerCall("rcc-related1");
};
export const rdfs_read_tbox_file = (filename) => {
  return String(racerCall("rdfs-read-tbox-file", filename));
};
export const rdfs_read_tbox_file_ = (filename) => {
  return racerCall("rdfs-read-tbox-file", filename);
};
export const ready_queries = (key_args) => {
  return String(racerCall("ready-queries", key_args));
};
export const ready_queries_ = (key_args) => {
  return racerCall("ready-queries", key_args);
};
export const ready_rules = (key_args) => {
  return String(racerCall("ready-rules", key_args));
};
export const ready_rules_ = (key_args) => {
  return racerCall("ready-rules", key_args);
};
export const realize_abox = (abox, individual_name) => {
  return String(racerCall("realize-abox", abox, individual_name));
};
export const realize_abox_ = (abox, individual_name) => {
  return racerCall("realize-abox", abox, individual_name);
};
export const recognize_events = (abox) => {
  return String(racerCall("recognize-events", abox));
};
export const recognize_events_ = (abox) => {
  return racerCall("recognize-events", abox);
};
export const reexecute_all_queries = (key_args) => {
  return String(racerCall("reexecute-all-queries", key_args));
};
export const reexecute_all_queries_ = (key_args) => {
  return racerCall("reexecute-all-queries", key_args);
};
export const reexecute_all_rules = (key_args) => {
  return String(racerCall("reexecute-all-rules", key_args));
};
export const reexecute_all_rules_ = (key_args) => {
  return racerCall("reexecute-all-rules", key_args);
};
export const reexecute_query = (query) => {
  return String(racerCall("reexecute-query", query));
};
export const reexecute_query_ = (query) => {
  return racerCall("reexecute-query", query);
};
export const reexecute_rule = (query) => {
  return String(racerCall("reexecute-rule", query));
};
export const reexecute_rule_ = (query) => {
  return racerCall("reexecute-rule", query);
};
export const reflexive_p = (role_term, tbox) => {
  return Boolean(racerCall("reflexive-p", role_term, tbox));
};
export const register_rcc_synonym = (role, rcc_relation) => {
  return String(racerCall("register-rcc-synonym", role, rcc_relation));
};
export const register_rcc_synonym_ = (role, rcc_relation) => {
  return racerCall("register-rcc-synonym", role, rcc_relation);
};
export const remove_implied_concept_assertions = (abox) => {
  return String(racerCall("remove-implied-concept-assertions", abox));
};
export const remove_implied_concept_assertions_ = (abox) => {
  return racerCall("remove-implied-concept-assertions", abox);
};
export const report_inconsistent_queries_and_rules = () => {
  return String(racerCall("report-inconsistent-queries-and-rules"));
};
export const report_inconsistent_queries_and_rules_ = () => {
  return racerCall("report-inconsistent-queries-and-rules");
};
export const reprepare_query = (key_args) => {
  return String(racerCall("reprepare-query", key_args));
};
export const reprepare_query_ = (key_args) => {
  return racerCall("reprepare-query", key_args);
};
export const reprepare_rule = (query) => {
  return String(racerCall("reprepare-rule", query));
};
export const reprepare_rule_ = (query) => {
  return racerCall("reprepare-rule", query);
};
export const reset_all_substrates = (key_args) => {
  return String(racerCall("reset-all-substrates", key_args));
};
export const reset_all_substrates_ = (key_args) => {
  return racerCall("reset-all-substrates", key_args);
};
export const reset_nrql_engine = (key_args) => {
  return String(racerCall("reset-nrql-engine", key_args));
};
export const reset_nrql_engine_ = (key_args) => {
  return racerCall("reset-nrql-engine", key_args);
};
export const restore_abox_image = (filename) => {
  return String(racerCall("restore-abox-image", filename));
};
export const restore_abox_image_ = (filename) => {
  return racerCall("restore-abox-image", filename);
};
export const restore_aboxes_image = (filename) => {
  return String(racerCall("restore-aboxes-image", filename));
};
export const restore_aboxes_image_ = (filename) => {
  return racerCall("restore-aboxes-image", filename);
};
export const restore_all_substrates = (filename) => {
  return String(racerCall("restore-all-substrates", filename));
};
export const restore_all_substrates_ = (filename) => {
  return racerCall("restore-all-substrates", filename);
};
export const restore_kb_image = (filename) => {
  return String(racerCall("restore-kb-image", filename));
};
export const restore_kb_image_ = (filename) => {
  return racerCall("restore-kb-image", filename);
};
export const restore_kbs_image = (filename) => {
  return String(racerCall("restore-kbs-image", filename));
};
export const restore_kbs_image_ = (filename) => {
  return racerCall("restore-kbs-image", filename);
};
export const restore_server_image = (filename) => {
  return String(racerCall("restore-server-image", filename));
};
export const restore_server_image_ = (filename) => {
  return racerCall("restore-server-image", filename);
};
export const restore_standard_settings = () => {
  return String(racerCall("restore-standard-settings"));
};
export const restore_standard_settings_ = () => {
  return racerCall("restore-standard-settings");
};
export const restore_substrate = (filename) => {
  return String(racerCall("restore-substrate", filename));
};
export const restore_substrate_ = (filename) => {
  return racerCall("restore-substrate", filename);
};
export const restore_tbox_image = (filename) => {
  return String(racerCall("restore-tbox-image", filename));
};
export const restore_tbox_image_ = (filename) => {
  return racerCall("restore-tbox-image", filename);
};
export const restore_tboxes_image = (filename) => {
  return String(racerCall("restore-tboxes-image", filename));
};
export const restore_tboxes_image_ = (filename) => {
  return racerCall("restore-tboxes-image", filename);
};
export const retrieve_concept_instances = (concept_term, abox, candidates) => {
  return String(
    racerCall("retrieve-concept-instances", concept_term, abox, candidates)
  );
};
export const retrieve_concept_instances_ = (concept_term, abox, candidates) => {
  return racerCall(
    "retrieve-concept-instances",
    concept_term,
    abox,
    candidates
  );
};
export const retrieve_direct_predecessors = (role_term, ind_filler, abox) => {
  return String(
    racerCall("retrieve-direct-predecessors", role_term, ind_filler, abox)
  );
};
export const retrieve_direct_predecessors_ = (role_term, ind_filler, abox) => {
  return racerCall("retrieve-direct-predecessors", role_term, ind_filler, abox);
};
export const retrieve_individual_annotation_property_fillers = (
  individual_name,
  role,
  abox,
  with_types_p
) => {
  return String(
    racerCall(
      "retrieve-individual-annotation-property-fillers",
      individual_name,
      role,
      abox,
      with_types_p
    )
  );
};
export const retrieve_individual_annotation_property_fillers_ = (
  individual_name,
  role,
  abox,
  with_types_p
) => {
  return racerCall(
    "retrieve-individual-annotation-property-fillers",
    individual_name,
    role,
    abox,
    with_types_p
  );
};
export const retrieve_individual_antonyms = (individual, told_only, abox) => {
  return String(
    racerCall("retrieve-individual-antonyms", individual, told_only, abox)
  );
};
export const retrieve_individual_antonyms_ = (individual, told_only, abox) => {
  return racerCall("retrieve-individual-antonyms", individual, told_only, abox);
};
export const retrieve_individual_attribute_fillers = (ind, attribute, abox) => {
  return String(
    racerCall("retrieve-individual-attribute-fillers", ind, attribute, abox)
  );
};
export const retrieve_individual_attribute_fillers_ = (
  ind,
  attribute,
  abox
) => {
  return racerCall(
    "retrieve-individual-attribute-fillers",
    ind,
    attribute,
    abox
  );
};
export const retrieve_individual_filled_roles = (key_args) => {
  return String(racerCall("retrieve-individual-filled-roles", key_args));
};
export const retrieve_individual_filled_roles_ = (key_args) => {
  return racerCall("retrieve-individual-filled-roles", key_args);
};
export const retrieve_individual_fillers = (
  ind_predecessor,
  role_term,
  abox
) => {
  return String(
    racerCall("retrieve-individual-fillers", ind_predecessor, role_term, abox)
  );
};
export const retrieve_individual_fillers_ = (
  ind_predecessor,
  role_term,
  abox
) => {
  return racerCall(
    "retrieve-individual-fillers",
    ind_predecessor,
    role_term,
    abox
  );
};
export const retrieve_individual_synonyms = (individual, told_only, abox) => {
  return String(
    racerCall("retrieve-individual-synonyms", individual, told_only, abox)
  );
};
export const retrieve_individual_synonyms_ = (individual, told_only, abox) => {
  return racerCall("retrieve-individual-synonyms", individual, told_only, abox);
};
export const retrieve_individual_told_attribute_value = (
  ind,
  attribute,
  abox
) => {
  return String(
    racerCall("retrieve-individual-told-attribute-value", ind, attribute, abox)
  );
};
export const retrieve_individual_told_attribute_value_ = (
  ind,
  attribute,
  abox
) => {
  return racerCall(
    "retrieve-individual-told-attribute-value",
    ind,
    attribute,
    abox
  );
};
export const retrieve_individual_told_datatype_fillers = (
  ind,
  datatype_role,
  direct_p,
  abox,
  with_types_p
) => {
  return String(
    racerCall(
      "retrieve-individual-told-datatype-fillers",
      ind,
      datatype_role,
      direct_p,
      abox,
      with_types_p
    )
  );
};
export const retrieve_individual_told_datatype_fillers_ = (
  ind,
  datatype_role,
  direct_p,
  abox,
  with_types_p
) => {
  return racerCall(
    "retrieve-individual-told-datatype-fillers",
    ind,
    datatype_role,
    direct_p,
    abox,
    with_types_p
  );
};
export const retrieve_related_individuals = (role_term, abox) => {
  return String(racerCall("retrieve-related-individuals", role_term, abox));
};
export const retrieve_related_individuals_ = (role_term, abox) => {
  return racerCall("retrieve-related-individuals", role_term, abox);
};
export const rmi = (args) => {
  return String(racerCall("rmi", args));
};
export const rmi_ = (args) => {
  return racerCall("rmi", args);
};
export const role_disjoint_p = (role_term1, role_term2, tbox) => {
  return Boolean(racerCall("role-disjoint-p", role_term1, role_term2, tbox));
};
export const role_equivalent_p = (role1, role2, tbox) => {
  return Boolean(racerCall("role-equivalent-p", role1, role2, tbox));
};
export const role_has_domain = (rolename, concept, tbox, errorp) => {
  return String(racerCall("role-has-domain", rolename, concept, tbox, errorp));
};
export const role_has_domain_ = (rolename, concept, tbox, errorp) => {
  return racerCall("role-has-domain", rolename, concept, tbox, errorp);
};
export const role_has_parent = (rolename1, rolename2, tbox) => {
  return String(racerCall("role-has-parent", rolename1, rolename2, tbox));
};
export const role_has_parent_ = (rolename1, rolename2, tbox) => {
  return racerCall("role-has-parent", rolename1, rolename2, tbox);
};
export const role_has_range = (rolename, concept, tbox, errorp) => {
  return String(racerCall("role-has-range", rolename, concept, tbox, errorp));
};
export const role_has_range_ = (rolename, concept, tbox, errorp) => {
  return racerCall("role-has-range", rolename, concept, tbox, errorp);
};
export const role_is_asymmetric = (rolename, tbox) => {
  return String(racerCall("role-is-asymmetric", rolename, tbox));
};
export const role_is_asymmetric_ = (rolename, tbox) => {
  return racerCall("role-is-asymmetric", rolename, tbox);
};
export const role_is_functional = (rolename, tbox) => {
  return String(racerCall("role-is-functional", rolename, tbox));
};
export const role_is_functional_ = (rolename, tbox) => {
  return racerCall("role-is-functional", rolename, tbox);
};
export const role_is_irreflexive = (rolename, tbox) => {
  return String(racerCall("role-is-irreflexive", rolename, tbox));
};
export const role_is_irreflexive_ = (rolename, tbox) => {
  return racerCall("role-is-irreflexive", rolename, tbox);
};
export const role_is_reflexive = (rolename, tbox) => {
  return String(racerCall("role-is-reflexive", rolename, tbox));
};
export const role_is_reflexive_ = (rolename, tbox) => {
  return racerCall("role-is-reflexive", rolename, tbox);
};
export const role_is_symmetric = (rolename, tbox) => {
  return String(racerCall("role-is-symmetric", rolename, tbox));
};
export const role_is_symmetric_ = (rolename, tbox) => {
  return racerCall("role-is-symmetric", rolename, tbox);
};
export const role_is_transitive = (rolename, tbox) => {
  return String(racerCall("role-is-transitive", rolename, tbox));
};
export const role_is_transitive_ = (rolename, tbox) => {
  return racerCall("role-is-transitive", rolename, tbox);
};
export const role_is_used_as_annotation_property = (rolename, tbox) => {
  return String(
    racerCall("role-is-used-as-annotation-property", rolename, tbox)
  );
};
export const role_is_used_as_annotation_property_ = (rolename, tbox) => {
  return racerCall("role-is-used-as-annotation-property", rolename, tbox);
};
export const role_is_used_as_datatype_property = (rolename, tbox) => {
  return String(racerCall("role-is-used-as-datatype-property", rolename, tbox));
};
export const role_is_used_as_datatype_property_ = (rolename, tbox) => {
  return racerCall("role-is-used-as-datatype-property", rolename, tbox);
};
export const role_p = (role_term, tbox) => {
  return Boolean(racerCall("role-p", role_term, tbox));
};
export const role_satisfiable_p = (role, tbox) => {
  return Boolean(racerCall("role-satisfiable-p", role, tbox));
};
export const role_subsumes_p = (role_term1, role_term2, tbox) => {
  return Boolean(racerCall("role-subsumes-p", role_term1, role_term2, tbox));
};
export const role_used_as_annotation_property_p = (role_name, tbox) => {
  return Boolean(
    racerCall("role-used-as-annotation-property-p", role_name, tbox)
  );
};
export const role_used_as_datatype_property_p = (role_name, tbox) => {
  return Boolean(
    racerCall("role-used-as-datatype-property-p", role_name, tbox)
  );
};
export const roles_disjoint1 = (role1, role2, tbox) => {
  return String(racerCall("roles-disjoint-1", role1, role2, tbox));
};
export const roles_disjoint1_ = (role1, role2, tbox) => {
  return racerCall("roles-disjoint-1", role1, role2, tbox);
};
export const roles_equivalent1 = (role1, role2, tbox) => {
  return String(racerCall("roles-equivalent-1", role1, role2, tbox));
};
export const roles_equivalent1_ = (role1, role2, tbox) => {
  return racerCall("roles-equivalent-1", role1, role2, tbox);
};
export const rule_accurate_p = (query) => {
  return Boolean(racerCall("rule-accurate-p", query));
};
export const rule_active_p = (query) => {
  return Boolean(racerCall("rule-active-p", query));
};
export const rule_antecedence = (query) => {
  return String(racerCall("rule-antecedence", query));
};
export const rule_antecedence_ = (query) => {
  return racerCall("rule-antecedence", query);
};
export const rule_applicable_p = (query) => {
  return Boolean(racerCall("rule-applicable-p", query));
};
export const rule_consequence = (query) => {
  return String(racerCall("rule-consequence", query));
};
export const rule_consequence_ = (query) => {
  return racerCall("rule-consequence", query);
};
export const rule_consistent_p = (query) => {
  return Boolean(racerCall("rule-consistent-p", query));
};
export const rule_prepared_p = (query) => {
  return Boolean(racerCall("rule-prepared-p", query));
};
export const rule_processed_p = (query) => {
  return Boolean(racerCall("rule-processed-p", query));
};
export const rule_ready_p = (query) => {
  return Boolean(racerCall("rule-ready-p", query));
};
export const rule_running_p = (query) => {
  return Boolean(racerCall("rule-running-p", query));
};
export const rule_sleeping_p = (query) => {
  return Boolean(racerCall("rule-sleeping-p", query));
};
export const rule_terminated_p = (query) => {
  return Boolean(racerCall("rule-terminated-p", query));
};
export const rule_unapplicable_p = (query) => {
  return Boolean(racerCall("rule-unapplicable-p", query));
};
export const rule_waiting_p = (query) => {
  return Boolean(racerCall("rule-waiting-p", query));
};
export const run_all_queries = (key_args) => {
  return String(racerCall("run-all-queries", key_args));
};
export const run_all_queries_ = (key_args) => {
  return racerCall("run-all-queries", key_args);
};
export const run_all_rules = (key_args) => {
  return String(racerCall("run-all-rules", key_args));
};
export const run_all_rules_ = (key_args) => {
  return racerCall("run-all-rules", key_args);
};
export const running_cheap_queries = (key_args) => {
  return String(racerCall("running-cheap-queries", key_args));
};
export const running_cheap_queries_ = (key_args) => {
  return racerCall("running-cheap-queries", key_args);
};
export const running_cheap_rules = (key_args) => {
  return String(racerCall("running-cheap-rules", key_args));
};
export const running_cheap_rules_ = (key_args) => {
  return racerCall("running-cheap-rules", key_args);
};
export const running_expensive_queries = (key_args) => {
  return String(racerCall("running-expensive-queries", key_args));
};
export const running_expensive_queries_ = (key_args) => {
  return racerCall("running-expensive-queries", key_args);
};
export const running_expensive_rules = (key_args) => {
  return String(racerCall("running-expensive-rules", key_args));
};
export const running_expensive_rules_ = (key_args) => {
  return racerCall("running-expensive-rules", key_args);
};
export const running_queries = (key_args) => {
  return String(racerCall("running-queries", key_args));
};
export const running_queries_ = (key_args) => {
  return racerCall("running-queries", key_args);
};
export const running_rules = (key_args) => {
  return String(racerCall("running-rules", key_args));
};
export const running_rules_ = (key_args) => {
  return racerCall("running-rules", key_args);
};
export const save_abox = (key_args) => {
  return String(racerCall("save-abox", key_args));
};
export const save_abox_ = (key_args) => {
  return racerCall("save-abox", key_args);
};
export const save_kb = (key_args) => {
  return String(racerCall("save-kb", key_args));
};
export const save_kb_ = (key_args) => {
  return racerCall("save-kb", key_args);
};
export const save_ontology_to_triple_store = (key_args) => {
  return String(racerCall("save-ontology-to-triple-store", key_args));
};
export const save_ontology_to_triple_store_ = (key_args) => {
  return racerCall("save-ontology-to-triple-store", key_args);
};
export const save_tbox = (key_args) => {
  return String(racerCall("save-tbox", key_args));
};
export const save_tbox_ = (key_args) => {
  return racerCall("save-tbox", key_args);
};
export const server_case = () => {
  return String(racerCall("server-case"));
};
export const server_case_ = () => {
  return racerCall("server-case");
};
export const server_function = (name) => {
  return String(racerCall("server-function", name));
};
export const server_function_ = (name) => {
  return racerCall("server-function", name);
};
export const server_value = (name) => {
  return String(racerCall("server-value", name));
};
export const server_value_ = (name) => {
  return racerCall("server-value", name);
};
export const set_attribute_filler = (abox, individual, value, attribute) => {
  return String(
    racerCall(
      "set-attribute-filler",
      abox,
      individual,
      value,
      attribute,
      attribute
    )
  );
};
export const set_attribute_filler_ = (abox, individual, value, attribute) => {
  return racerCall(
    "set-attribute-filler",
    abox,
    individual,
    value,
    attribute,
    attribute
  );
};
export const set_current_abox = (abox) => {
  return String(racerCall("set-current-abox", abox));
};
export const set_current_abox_ = (abox) => {
  return racerCall("set-current-abox", abox);
};
export const set_current_tbox = (tbox) => {
  return String(racerCall("set-current-tbox", tbox));
};
export const set_current_tbox_ = (tbox) => {
  return racerCall("set-current-tbox", tbox);
};
export const set_data_box = (name) => {
  return String(racerCall("set-data-box", name));
};
export const set_data_box_ = (name) => {
  return racerCall("set-data-box", name);
};
export const set_edge_label_for_non_existent_edges = (key_args) => {
  return String(racerCall("set-edge-label-for-non-existent-edges", key_args));
};
export const set_edge_label_for_non_existent_edges_ = (key_args) => {
  return racerCall("set-edge-label-for-non-existent-edges", key_args);
};
export const set_find_abox = (abox_name1, abox_name2) => {
  return String(racerCall("set-find-abox", abox_name1, abox_name2));
};
export const set_find_abox_ = (abox_name1, abox_name2) => {
  return racerCall("set-find-abox", abox_name1, abox_name2);
};
export const set_find_tbox = (tbox_name1, tbox_name2) => {
  return String(racerCall("set-find-tbox", tbox_name1, tbox_name2));
};
export const set_find_tbox_ = (tbox_name1, tbox_name2) => {
  return racerCall("set-find-tbox", tbox_name1, tbox_name2);
};
export const set_initial_size_of_process_pool = (n) => {
  return String(racerCall("set-initial-size-of-process-pool", n));
};
export const set_initial_size_of_process_pool_ = (n) => {
  return racerCall("set-initial-size-of-process-pool", n);
};
export const set_max_no_of_tuples_bound = (n) => {
  return String(racerCall("set-max-no-of-tuples-bound", n));
};
export const set_max_no_of_tuples_bound_ = (n) => {
  return racerCall("set-max-no-of-tuples-bound", n);
};
export const set_maximum_size_of_process_pool = (n) => {
  return String(racerCall("set-maximum-size-of-process-pool", n));
};
export const set_maximum_size_of_process_pool_ = (n) => {
  return racerCall("set-maximum-size-of-process-pool", n);
};
export const set_mirror_data_box = (name) => {
  return String(racerCall("set-mirror-data-box", name));
};
export const set_mirror_data_box_ = (name) => {
  return racerCall("set-mirror-data-box", name);
};
export const set_new_ind_counter = (n) => {
  return String(racerCall("set-new-ind-counter", n));
};
export const set_new_ind_counter_ = (n) => {
  return racerCall("set-new-ind-counter", n);
};
export const set_new_ind_prefix = (prefix) => {
  return String(racerCall("set-new-ind-prefix", prefix));
};
export const set_new_ind_prefix_ = (prefix) => {
  return racerCall("set-new-ind-prefix", prefix);
};
export const set_nrql_mode = (mode) => {
  return String(racerCall("set-nrql-mode", mode));
};
export const set_nrql_mode_ = (mode) => {
  return racerCall("set-nrql-mode", mode);
};
export const set_proxy_server = (proxy) => {
  return String(racerCall("set-proxy-server", proxy));
};
export const set_proxy_server_ = (proxy) => {
  return racerCall("set-proxy-server", proxy);
};
export const set_racer_parameter = (name, value) => {
  return String(racerCall("set-racer-parameter", name, value));
};
export const set_racer_parameter_ = (name, value) => {
  return racerCall("set-racer-parameter", name, value);
};
export const set_rcc_box = (name, rcc_type, type_) => {
  return String(racerCall("set-rcc-box", name, rcc_type, type_));
};
export const set_rcc_box_ = (name, rcc_type, type_) => {
  return racerCall("set-rcc-box", name, rcc_type, type_);
};
export const set_rewrite_defined_concepts = (val) => {
  return String(racerCall("set-rewrite-defined-concepts", val));
};
export const set_rewrite_defined_concepts_ = (val) => {
  return racerCall("set-rewrite-defined-concepts", val);
};
export const set_server_timeout = (timeout) => {
  return String(racerCall("set-server-timeout", timeout));
};
export const set_server_timeout_ = (timeout) => {
  return racerCall("set-server-timeout", timeout);
};
export const set_substrate_type = (type_) => {
  return String(racerCall("set-substrate-type", type_));
};
export const set_substrate_type_ = (type_) => {
  return racerCall("set-substrate-type", type_);
};
export const set_unique_name_assumption = (value) => {
  return String(racerCall("set-unique-name-assumption", value));
};
export const set_unique_name_assumption_ = (value) => {
  return racerCall("set-unique-name-assumption", value);
};
export const show_qbox_for_abox = (abox, definitions_p) => {
  return String(racerCall("show-qbox-for-abox", abox, definitions_p));
};
export const show_qbox_for_abox_ = (abox, definitions_p) => {
  return racerCall("show-qbox-for-abox", abox, definitions_p);
};
export const sleeping_cheap_queries = (key_args) => {
  return String(racerCall("sleeping-cheap-queries", key_args));
};
export const sleeping_cheap_queries_ = (key_args) => {
  return racerCall("sleeping-cheap-queries", key_args);
};
export const sleeping_cheap_rules = (key_args) => {
  return String(racerCall("sleeping-cheap-rules", key_args));
};
export const sleeping_cheap_rules_ = (key_args) => {
  return racerCall("sleeping-cheap-rules", key_args);
};
export const sleeping_expensive_queries = (key_args) => {
  return String(racerCall("sleeping-expensive-queries", key_args));
};
export const sleeping_expensive_queries_ = (key_args) => {
  return racerCall("sleeping-expensive-queries", key_args);
};
export const sleeping_expensive_rules = (key_args) => {
  return String(racerCall("sleeping-expensive-rules", key_args));
};
export const sleeping_expensive_rules_ = (key_args) => {
  return racerCall("sleeping-expensive-rules", key_args);
};
export const sleeping_queries = (key_args) => {
  return String(racerCall("sleeping-queries", key_args));
};
export const sleeping_queries_ = (key_args) => {
  return racerCall("sleeping-queries", key_args);
};
export const sleeping_rules = (key_args) => {
  return String(racerCall("sleeping-rules", key_args));
};
export const sleeping_rules_ = (key_args) => {
  return racerCall("sleeping-rules", key_args);
};
export const store_abox_image = (filename, abox) => {
  return String(racerCall("store-abox-image", filename, abox));
};
export const store_abox_image_ = (filename, abox) => {
  return racerCall("store-abox-image", filename, abox);
};
export const store_aboxes_image = (filename, aboxes) => {
  return String(racerCall("store-aboxes-image", filename, aboxes));
};
export const store_aboxes_image_ = (filename, aboxes) => {
  return racerCall("store-aboxes-image", filename, aboxes);
};
export const store_all_substrates = (filename) => {
  return String(racerCall("store-all-substrates", filename));
};
export const store_all_substrates_ = (filename) => {
  return racerCall("store-all-substrates", filename);
};
export const store_kb_image = (filename, kb) => {
  return String(racerCall("store-kb-image", filename, kb));
};
export const store_kb_image_ = (filename, kb) => {
  return racerCall("store-kb-image", filename, kb);
};
export const store_kbs_image = (filename, kbs) => {
  return String(racerCall("store-kbs-image", filename, kbs));
};
export const store_kbs_image_ = (filename, kbs) => {
  return racerCall("store-kbs-image", filename, kbs);
};
export const store_server_image = (filename) => {
  return String(racerCall("store-server-image", filename));
};
export const store_server_image_ = (filename) => {
  return racerCall("store-server-image", filename);
};
export const store_substrate_for_abox = (
  filename,
  for_abox,
  type_of_substrate
) => {
  return String(
    racerCall("store-substrate-for-abox", filename, for_abox, type_of_substrate)
  );
};
export const store_substrate_for_abox_ = (
  filename,
  for_abox,
  type_of_substrate
) => {
  return racerCall(
    "store-substrate-for-abox",
    filename,
    for_abox,
    type_of_substrate
  );
};
export const store_tbox_image = (filename, tbox) => {
  return String(racerCall("store-tbox-image", filename, tbox));
};
export const store_tbox_image_ = (filename, tbox) => {
  return racerCall("store-tbox-image", filename, tbox);
};
export const store_tboxes_image = (tboxes, filename) => {
  return String(racerCall("store-tboxes-image", tboxes, filename));
};
export const store_tboxes_image_ = (tboxes, filename) => {
  return racerCall("store-tboxes-image", tboxes, filename);
};
export const subscribe1 = (
  subscriber_name,
  query_concept,
  abox,
  ip,
  port,
  simple_protocol_p
) => {
  return String(
    racerCall(
      "subscribe-1",
      subscriber_name,
      query_concept,
      abox,
      ip,
      port,
      simple_protocol_p
    )
  );
};
export const subscribe1_ = (
  subscriber_name,
  query_concept,
  abox,
  ip,
  port,
  simple_protocol_p
) => {
  return racerCall(
    "subscribe-1",
    subscriber_name,
    query_concept,
    abox,
    ip,
    port,
    simple_protocol_p
  );
};
export const subscribe_to = (key_args) => {
  return String(racerCall("subscribe-to", key_args));
};
export const subscribe_to_ = (key_args) => {
  return racerCall("subscribe-to", key_args);
};
export const swrl_create_abduction_rules_if_possible = () => {
  return String(racerCall("swrl-create-abduction-rules-if-possible"));
};
export const swrl_create_abduction_rules_if_possible_ = () => {
  return racerCall("swrl-create-abduction-rules-if-possible");
};
export const swrl_create_forward_chainging_rules = () => {
  return String(racerCall("swrl-create-forward-chainging-rules"));
};
export const swrl_create_forward_chainging_rules_ = () => {
  return racerCall("swrl-create-forward-chainging-rules");
};
export const swrl_forward_chaining = (key_args) => {
  return String(racerCall("swrl-forward-chaining", key_args));
};
export const swrl_forward_chaining_ = (key_args) => {
  return racerCall("swrl-forward-chaining", key_args);
};
export const symmetric_p = (role_term, tbox) => {
  return Boolean(racerCall("symmetric-p", role_term, tbox));
};
export const taxonomy = (tbox) => {
  return String(racerCall("taxonomy", tbox));
};
export const taxonomy_ = (tbox) => {
  return racerCall("taxonomy", tbox);
};
export const tbox_classified_p = (tbox) => {
  return Boolean(racerCall("tbox-classified-p", tbox));
};
export const tbox_coherent_p = (tbox) => {
  return Boolean(racerCall("tbox-coherent-p", tbox));
};
export const tbox_cyclic_p = (tbox) => {
  return Boolean(racerCall("tbox-cyclic-p", tbox));
};
export const tbox_prepared_p = (tbox) => {
  return Boolean(racerCall("tbox-prepared-p", tbox));
};
export const terminated_queries = (key_args) => {
  return String(racerCall("terminated-queries", key_args));
};
export const terminated_queries_ = (key_args) => {
  return racerCall("terminated-queries", key_args);
};
export const terminated_rules = (key_args) => {
  return String(racerCall("terminated-rules", key_args));
};
export const terminated_rules_ = (key_args) => {
  return racerCall("terminated-rules", key_args);
};
export const timenet_answer_query = (key_args) => {
  return String(racerCall("timenet-answer-query", key_args));
};
export const timenet_answer_query_ = (key_args) => {
  return racerCall("timenet-answer-query", key_args);
};
export const told_value = (object_, abox) => {
  return String(racerCall("told-value", object_, abox));
};
export const told_value_ = (object_, abox) => {
  return racerCall("told-value", object_, abox);
};
export const transitive_p = (role_term, tbox) => {
  return Boolean(racerCall("transitive-p", role_term, tbox));
};
export const transmit_file = (extension, n_bytes_) => {
  return String(racerCall("transmit-file", extension, n_bytes_));
};
export const transmit_file_ = (extension, n_bytes_) => {
  return racerCall("transmit-file", extension, n_bytes_);
};
export const triple_store_graphs = (key_args) => {
  return String(racerCall("triple-store-graphs", key_args));
};
export const triple_store_graphs_ = (key_args) => {
  return racerCall("triple-store-graphs", key_args);
};
export const triple_store_open_p = (db_name) => {
  return Boolean(racerCall("triple-store-open-p", db_name));
};
export const triple_store_read_file = (key_args) => {
  return String(racerCall("triple-store-read-file", key_args));
};
export const triple_store_read_file_ = (key_args) => {
  return racerCall("triple-store-read-file", key_args);
};
export const unapplicable_rules = (key_args) => {
  return String(racerCall("unapplicable-rules", key_args));
};
export const unapplicable_rules_ = (key_args) => {
  return racerCall("unapplicable-rules", key_args);
};
export const unbind_all = () => {
  return String(racerCall("unbind-all"));
};
export const unbind_all_ = () => {
  return racerCall("unbind-all");
};
export const unbind1 = (name) => {
  return String(racerCall("unbind1", name));
};
export const unbind1_ = (name) => {
  return racerCall("unbind1", name);
};
export const undefine_all = () => {
  return String(racerCall("undefine-all"));
};
export const undefine_all_ = () => {
  return racerCall("undefine-all");
};
export const undefine_query = (key_args) => {
  return String(racerCall("undefine-query", key_args));
};
export const undefine_query_ = (key_args) => {
  return racerCall("undefine-query", key_args);
};
export const undefine1 = (name) => {
  return String(racerCall("undefine1", name));
};
export const undefine1_ = (name) => {
  return racerCall("undefine1", name);
};
export const unpublish1 = (individual, abox) => {
  return String(racerCall("unpublish-1", individual, abox));
};
export const unpublish1_ = (individual, abox) => {
  return racerCall("unpublish-1", individual, abox);
};
export const unsubscribe1 = (subscriber_name, query_concept, abox) => {
  return String(
    racerCall("unsubscribe-1", subscriber_name, query_concept, abox)
  );
};
export const unsubscribe1_ = (subscriber_name, query_concept, abox) => {
  return racerCall("unsubscribe-1", subscriber_name, query_concept, abox);
};
export const unsubscribe_from = (key_args) => {
  return String(racerCall("unsubscribe-from", key_args));
};
export const unsubscribe_from_ = (key_args) => {
  return racerCall("unsubscribe-from", key_args);
};
export const update_racer = (key_args) => {
  return String(racerCall("update-racer", key_args));
};
export const update_racer_ = (key_args) => {
  return racerCall("update-racer", key_args);
};
export const use_individual_synonym_equivalence_classes = () => {
  return String(racerCall("use-individual-synonym-equivalence-classes"));
};
export const use_individual_synonym_equivalence_classes_ = () => {
  return racerCall("use-individual-synonym-equivalence-classes");
};
export const use_injective_variables_by_default = () => {
  return String(racerCall("use-injective-variables-by-default"));
};
export const use_injective_variables_by_default_ = () => {
  return racerCall("use-injective-variables-by-default");
};
export const use_triple_store = (key_args) => {
  return String(racerCall("use-triple-store", key_args));
};
export const use_triple_store_ = (key_args) => {
  return racerCall("use-triple-store", key_args);
};
export const verify_with_abox_individuals_list = (individuals_list, abox) => {
  return String(
    racerCall("verify-with-abox-individuals-list", individuals_list, abox)
  );
};
export const verify_with_abox_individuals_list_ = (individuals_list, abox) => {
  return racerCall("verify-with-abox-individuals-list", individuals_list, abox);
};
export const verify_with_concept_tree_list = (
  tree_list,
  tbox,
  ignore_error
) => {
  return String(
    racerCall("verify-with-concept-tree-list", tree_list, tbox, ignore_error)
  );
};
export const verify_with_concept_tree_list_ = (
  tree_list,
  tbox,
  ignore_error
) => {
  return racerCall(
    "verify-with-concept-tree-list",
    tree_list,
    tbox,
    ignore_error
  );
};
export const wait_for_queries_to_terminate = () => {
  return String(racerCall("wait-for-queries-to-terminate"));
};
export const wait_for_queries_to_terminate_ = () => {
  return racerCall("wait-for-queries-to-terminate");
};
export const wait_for_rules_to_terminate = () => {
  return String(racerCall("wait-for-rules-to-terminate"));
};
export const wait_for_rules_to_terminate_ = () => {
  return racerCall("wait-for-rules-to-terminate");
};
export const waiting_cheap_queries = (key_args) => {
  return String(racerCall("waiting-cheap-queries", key_args));
};
export const waiting_cheap_queries_ = (key_args) => {
  return racerCall("waiting-cheap-queries", key_args);
};
export const waiting_cheap_rules = (key_args) => {
  return String(racerCall("waiting-cheap-rules", key_args));
};
export const waiting_cheap_rules_ = (key_args) => {
  return racerCall("waiting-cheap-rules", key_args);
};
export const waiting_expensive_queries = (key_args) => {
  return String(racerCall("waiting-expensive-queries", key_args));
};
export const waiting_expensive_queries_ = (key_args) => {
  return racerCall("waiting-expensive-queries", key_args);
};
export const waiting_expensive_rules = (key_args) => {
  return String(racerCall("waiting-expensive-rules", key_args));
};
export const waiting_expensive_rules_ = (key_args) => {
  return racerCall("waiting-expensive-rules", key_args);
};
export const waiting_queries = (key_args) => {
  return String(racerCall("waiting-queries", key_args));
};
export const waiting_queries_ = (key_args) => {
  return racerCall("waiting-queries", key_args);
};
export const waiting_rules = (key_args) => {
  return String(racerCall("waiting-rules", key_args));
};
export const waiting_rules_ = (key_args) => {
  return racerCall("waiting-rules", key_args);
};
export const xml_read_tbox_file = (filename) => {
  return String(racerCall("xml-read-tbox-file", filename));
};
export const xml_read_tbox_file_ = (filename) => {
  return racerCall("xml-read-tbox-file", filename);
};
export const abox_consistent_m_p = (abox_name) => {
  return Boolean(racerCall("abox-consistent?", abox_name));
};
export const abox_prepared_m_p = (abox_name) => {
  return Boolean(racerCall("abox-prepared?", abox_name));
};
export const abox_realized_m_p = (abox_name) => {
  return Boolean(racerCall("abox-realized?", abox_name));
};
export const abox_una_consistent_m_p = (abox_name) => {
  return Boolean(racerCall("abox-una-consistent?", abox_name));
};
export const add_doc_entry_m = () => {
  return String(racerCall("add-doc-entry"));
};
export const add_doc_entry_m_ = () => {
  return racerCall("add-doc-entry");
};
export const add_doc_image_data_m = (url, type_, bytes_) => {
  return String(racerCall("add-doc-image-data", url, type_, bytes_));
};
export const add_doc_image_data_m_ = (url, type_, bytes_) => {
  return racerCall("add-doc-image-data", url, type_, bytes_);
};
export const add_doc_image_data_from_file_m = (url, type_, pathname) => {
  return String(
    racerCall("add-doc-image-data-from-file", url, type_, pathname)
  );
};
export const add_doc_image_data_from_file_m_ = (url, type_, pathname) => {
  return racerCall("add-doc-image-data-from-file", url, type_, pathname);
};
export const add_doc_image_file_m = (url, type_, pathname) => {
  return String(racerCall("add-doc-image-file", url, type_, pathname));
};
export const add_doc_image_file_m_ = (url, type_, pathname) => {
  return racerCall("add-doc-image-file", url, type_, pathname);
};
export const add_doc_phrase_m = (label, string) => {
  return String(racerCall("add-doc-phrase", label, string));
};
export const add_doc_phrase_m_ = (label, string) => {
  return racerCall("add-doc-phrase", label, string);
};
export const all_different_m = (key_args) => {
  return String(racerCall("all-different", key_args));
};
export const all_different_m_ = (key_args) => {
  return racerCall("all-different", key_args);
};
export const apply_abox_rule_m = (key_args) => {
  return String(racerCall("apply-abox-rule", key_args));
};
export const apply_abox_rule_m_ = (key_args) => {
  return racerCall("apply-abox-rule", key_args);
};
export const apply_abox_rule_under_premise_m = (key_args) => {
  return String(racerCall("apply-abox-rule-under-premise", key_args));
};
export const apply_abox_rule_under_premise_m_ = (key_args) => {
  return racerCall("apply-abox-rule-under-premise", key_args);
};
export const apply_abox_rule_under_premise1_m = (key_args) => {
  return String(racerCall("apply-abox-rule-under-premise1", key_args));
};
export const apply_abox_rule_under_premise1_m_ = (key_args) => {
  return racerCall("apply-abox-rule-under-premise1", key_args);
};
export const apply_abox_rule1_m = (key_args) => {
  return String(racerCall("apply-abox-rule1", key_args));
};
export const apply_abox_rule1_m_ = (key_args) => {
  return racerCall("apply-abox-rule1", key_args);
};
export const asymmetric_m = (rolename, tbox) => {
  return String(racerCall("asymmetric", rolename, tbox));
};
export const asymmetric_m_ = (rolename, tbox) => {
  return racerCall("asymmetric", rolename, tbox);
};
export const asymmetric_m_p = (role_term, tbox_name) => {
  return Boolean(racerCall("asymmetric?", role_term, tbox_name));
};
export const attribute_domain_m = (attribute_name, tbox) => {
  return String(racerCall("attribute-domain", attribute_name, tbox));
};
export const attribute_domain_m_ = (attribute_name, tbox) => {
  return racerCall("attribute-domain", attribute_name, tbox);
};
export const attribute_filler_m = (individual, value, attribute, type_) => {
  return String(
    racerCall("attribute-filler", individual, value, attribute, type_)
  );
};
export const attribute_filler_m_ = (individual, value, attribute, type_) => {
  return racerCall("attribute-filler", individual, value, attribute, type_);
};
export const cd_attribute_m_p = (attribute, tbox_name) => {
  return Boolean(racerCall("cd-attribute?", attribute, tbox_name));
};
export const cd_object_m_p = (object_name, abox_name) => {
  return Boolean(racerCall("cd-object?", object_name, abox_name));
};
export const clone_abox_m = (key_args) => {
  return String(racerCall("clone-abox", key_args));
};
export const clone_abox_m_ = (key_args) => {
  return racerCall("clone-abox", key_args);
};
export const clone_tbox_m = (key_args) => {
  return String(racerCall("clone-tbox", key_args));
};
export const clone_tbox_m_ = (key_args) => {
  return racerCall("clone-tbox", key_args);
};
export const compute_abox_difference_m = (key_args) => {
  return String(racerCall("compute-abox-difference", key_args));
};
export const compute_abox_difference_m_ = (key_args) => {
  return racerCall("compute-abox-difference", key_args);
};
export const compute_abox_difference_alternative_m = (key_args) => {
  return String(racerCall("compute-abox-difference-alternative", key_args));
};
export const compute_abox_difference_alternative_m_ = (key_args) => {
  return racerCall("compute-abox-difference-alternative", key_args);
};
export const concept_ancestors_m = (concept_term, tbox) => {
  return String(racerCall("concept-ancestors", concept_term, tbox));
};
export const concept_ancestors_m_ = (concept_term, tbox) => {
  return racerCall("concept-ancestors", concept_term, tbox);
};
export const concept_children_m = (concept_term, tbox) => {
  return String(racerCall("concept-children", concept_term, tbox));
};
export const concept_children_m_ = (concept_term, tbox) => {
  return racerCall("concept-children", concept_term, tbox);
};
export const concept_descendants_m = (concept_term, tbox) => {
  return String(racerCall("concept-descendants", concept_term, tbox));
};
export const concept_descendants_m_ = (concept_term, tbox) => {
  return racerCall("concept-descendants", concept_term, tbox);
};
export const concept_disjoint_m_p = (concept1, concept2, tbox_name) => {
  return Boolean(racerCall("concept-disjoint?", concept1, concept2, tbox_name));
};
export const concept_equivalent_m_p = (concept1, concept2, tbox_name) => {
  return Boolean(
    racerCall("concept-equivalent?", concept1, concept2, tbox_name)
  );
};
export const concept_instances_m = (concept_term, abox, candidates) => {
  return String(racerCall("concept-instances", concept_term, abox, candidates));
};
export const concept_instances_m_ = (concept_term, abox, candidates) => {
  return racerCall("concept-instances", concept_term, abox, candidates);
};
export const concept_is_primitive_m_p = (concept_name, tbox) => {
  return Boolean(racerCall("concept-is-primitive?", concept_name, tbox));
};
export const concept_parents_m = (concept_term, tbox) => {
  return String(racerCall("concept-parents", concept_term, tbox));
};
export const concept_parents_m_ = (concept_term, tbox) => {
  return racerCall("concept-parents", concept_term, tbox);
};
export const concept_satisfiable_m_p = (concept1, tbox_name) => {
  return Boolean(racerCall("concept-satisfiable?", concept1, tbox_name));
};
export const concept_subsumes_m_p = (concept1, concept2, tbox_name) => {
  return Boolean(racerCall("concept-subsumes?", concept1, concept2, tbox_name));
};
export const concept_synonyms_m = (concept_term, tbox) => {
  return String(racerCall("concept-synonyms", concept_term, tbox));
};
export const concept_synonyms_m_ = (concept_term, tbox) => {
  return racerCall("concept-synonyms", concept_term, tbox);
};
export const concept_m_p = (concept_name, tbox_name) => {
  return Boolean(racerCall("concept?", concept_name, tbox_name));
};
export const constrained_m = (individual, object_, attribute) => {
  return String(racerCall("constrained", individual, object_, attribute));
};
export const constrained_m_ = (individual, object_, attribute) => {
  return racerCall("constrained", individual, object_, attribute);
};
export const constraint_entailed_m_p = (constraint, abox_name) => {
  return Boolean(racerCall("constraint-entailed?", constraint, abox_name));
};
export const constraints_m = (key_args) => {
  return String(racerCall("constraints", key_args));
};
export const constraints_m_ = (key_args) => {
  return racerCall("constraints", key_args);
};
export const data_edge_m = (
  from_,
  to,
  data_relation,
  racer_descr,
  abox,
  type_of_substrate
) => {
  return String(
    racerCall(
      "data-edge",
      from_,
      to,
      data_relation,
      racer_descr,
      abox,
      type_of_substrate
    )
  );
};
export const data_edge_m_ = (
  from_,
  to,
  data_relation,
  racer_descr,
  abox,
  type_of_substrate
) => {
  return racerCall(
    "data-edge",
    from_,
    to,
    data_relation,
    racer_descr,
    abox,
    type_of_substrate
  );
};
export const data_node_m = (
  name,
  descr,
  racer_descr,
  abox,
  type_of_substrate
) => {
  return String(
    racerCall("data-node", name, descr, racer_descr, abox, type_of_substrate)
  );
};
export const data_node_m_ = (
  name,
  descr,
  racer_descr,
  abox,
  type_of_substrate
) => {
  return racerCall(
    "data-node",
    name,
    descr,
    racer_descr,
    abox,
    type_of_substrate
  );
};
export const datatype_role_filler_m = (individual, value, role, type_) => {
  return String(
    racerCall("datatype-role-filler", individual, value, role, type_)
  );
};
export const datatype_role_filler_m_ = (individual, value, role, type_) => {
  return racerCall("datatype-role-filler", individual, value, role, type_);
};
export const def_and_exec_query_m = (key_args) => {
  return String(racerCall("def-and-exec-query", key_args));
};
export const def_and_exec_query_m_ = (key_args) => {
  return racerCall("def-and-exec-query", key_args);
};
export const def_and_prep_query_m = (key_args) => {
  return String(racerCall("def-and-prep-query", key_args));
};
export const def_and_prep_query_m_ = (key_args) => {
  return racerCall("def-and-prep-query", key_args);
};
export const defcon_m = (name, value) => {
  return String(racerCall("defcon", name, value));
};
export const defcon_m_ = (name, value) => {
  return racerCall("defcon", name, value);
};
export const define_m = (name, arglist) => {
  return String(racerCall("define", name, arglist));
};
export const define_m_ = (name, arglist) => {
  return racerCall("define", name, arglist);
};
export const define_abox_m = (key_args) => {
  return String(racerCall("define-abox", key_args));
};
export const define_abox_m_ = (key_args) => {
  return racerCall("define-abox", key_args);
};
export const define_concept_m = (name, definition) => {
  return String(racerCall("define-concept", name, definition));
};
export const define_concept_m_ = (name, definition) => {
  return racerCall("define-concept", name, definition);
};
export const define_concrete_domain_attribute_m = (key_args) => {
  return String(racerCall("define-concrete-domain-attribute", key_args));
};
export const define_concrete_domain_attribute_m_ = (key_args) => {
  return racerCall("define-concrete-domain-attribute", key_args);
};
export const define_datatype_property_m = (key_args) => {
  return String(racerCall("define-datatype-property", key_args));
};
export const define_datatype_property_m_ = (key_args) => {
  return racerCall("define-datatype-property", key_args);
};
export const define_disjoint_primitive_concept_m = (
  name,
  disjoint_list,
  definition
) => {
  return String(
    racerCall(
      "define-disjoint-primitive-concept",
      name,
      disjoint_list,
      definition
    )
  );
};
export const define_disjoint_primitive_concept_m_ = (
  name,
  disjoint_list,
  definition
) => {
  return racerCall(
    "define-disjoint-primitive-concept",
    name,
    disjoint_list,
    definition
  );
};
export const define_distinct_individual_m = (individual_name, concept) => {
  return String(
    racerCall("define-distinct-individual", individual_name, concept)
  );
};
export const define_distinct_individual_m_ = (individual_name, concept) => {
  return racerCall("define-distinct-individual", individual_name, concept);
};
export const define_event_assertion_m = (assertion) => {
  return String(racerCall("define-event-assertion", assertion));
};
export const define_event_assertion_m_ = (assertion) => {
  return racerCall("define-event-assertion", assertion);
};
export const define_event_rule_m = (key_args) => {
  return String(racerCall("define-event-rule", key_args));
};
export const define_event_rule_m_ = (key_args) => {
  return racerCall("define-event-rule", key_args);
};
export const define_individual_m = (individual_name, concept) => {
  return String(racerCall("define-individual", individual_name, concept));
};
export const define_individual_m_ = (individual_name, concept) => {
  return racerCall("define-individual", individual_name, concept);
};
export const define_prefix_m = (prefix, mapping) => {
  return String(racerCall("define-prefix", prefix, mapping));
};
export const define_prefix_m_ = (prefix, mapping) => {
  return racerCall("define-prefix", prefix, mapping);
};
export const define_primitive_attribute_m = (key_args) => {
  return String(racerCall("define-primitive-attribute", key_args));
};
export const define_primitive_attribute_m_ = (key_args) => {
  return racerCall("define-primitive-attribute", key_args);
};
export const define_primitive_concept_m = (name, definition) => {
  return String(racerCall("define-primitive-concept", name, definition));
};
export const define_primitive_concept_m_ = (name, definition) => {
  return racerCall("define-primitive-concept", name, definition);
};
export const define_primitive_role_m = (key_args) => {
  return String(racerCall("define-primitive-role", key_args));
};
export const define_primitive_role_m_ = (key_args) => {
  return racerCall("define-primitive-role", key_args);
};
export const define_rule_m = (key_args) => {
  return String(racerCall("define-rule", key_args));
};
export const define_rule_m_ = (key_args) => {
  return racerCall("define-rule", key_args);
};
export const define_tbox_m = (key_args) => {
  return String(racerCall("define-tbox", key_args));
};
export const define_tbox_m_ = (key_args) => {
  return racerCall("define-tbox", key_args);
};
export const defpar_m = (name, value) => {
  return String(racerCall("defpar", name, value));
};
export const defpar_m_ = (name, value) => {
  return racerCall("defpar", name, value);
};
export const defquery_m = (key_args) => {
  return String(racerCall("defquery", key_args));
};
export const defquery_m_ = (key_args) => {
  return racerCall("defquery", key_args);
};
export const del_data_edge_m = (from_, to, abox, type_of_substrate) => {
  return String(racerCall("del-data-edge", from_, to, abox, type_of_substrate));
};
export const del_data_edge_m_ = (from_, to, abox, type_of_substrate) => {
  return racerCall("del-data-edge", from_, to, abox, type_of_substrate);
};
export const del_data_node_m = (name, abox, type_of_substrate) => {
  return String(racerCall("del-data-node", name, abox, type_of_substrate));
};
export const del_data_node_m_ = (name, abox, type_of_substrate) => {
  return racerCall("del-data-node", name, abox, type_of_substrate);
};
export const del_doc_entry_m = (label) => {
  return String(racerCall("del-doc-entry", label));
};
export const del_doc_entry_m_ = (label) => {
  return racerCall("del-doc-entry", label);
};
export const del_rcc_edge_m = () => {
  return String(racerCall("del-rcc-edge"));
};
export const del_rcc_edge_m_ = () => {
  return racerCall("del-rcc-edge");
};
export const del_rcc_node_m = () => {
  return String(racerCall("del-rcc-node"));
};
export const del_rcc_node_m_ = () => {
  return racerCall("del-rcc-node");
};
export const delete_abox_m = (abox) => {
  return String(racerCall("delete-abox", abox));
};
export const delete_abox_m_ = (abox) => {
  return racerCall("delete-abox", abox);
};
export const delete_tbox_m = (tbox) => {
  return String(racerCall("delete-tbox", tbox));
};
export const delete_tbox_m_ = (tbox) => {
  return racerCall("delete-tbox", tbox);
};
export const description_implies_m_p = (a, b) => {
  return Boolean(racerCall("description-implies?", a, b));
};
export const different_from_m = (individual_name1, individual_name2) => {
  return String(
    racerCall("different-from", individual_name1, individual_name2)
  );
};
export const different_from_m_ = (individual_name1, individual_name2) => {
  return racerCall("different-from", individual_name1, individual_name2);
};
export const direct_predecessors_m = (role_term, ind_filler, abox) => {
  return String(racerCall("direct-predecessors", role_term, ind_filler, abox));
};
export const direct_predecessors_m_ = (role_term, ind_filler, abox) => {
  return racerCall("direct-predecessors", role_term, ind_filler, abox);
};
export const disjoint_m = (key_args) => {
  return String(racerCall("disjoint", key_args));
};
export const disjoint_m_ = (key_args) => {
  return racerCall("disjoint", key_args);
};
export const domain_m = (rolename, concept, tbox, errorp) => {
  return String(racerCall("domain", rolename, concept, tbox, errorp));
};
export const domain_m_ = (rolename, concept, tbox, errorp) => {
  return racerCall("domain", rolename, concept, tbox, errorp);
};
export const edge_description_m = (from_, to, abox, type_of_substrate) => {
  return String(
    racerCall("edge-description", from_, to, abox, type_of_substrate)
  );
};
export const edge_description_m_ = (from_, to, abox, type_of_substrate) => {
  return racerCall("edge-description", from_, to, abox, type_of_substrate);
};
export const edge_label_m = (from_, to, abox, type_of_substrate) => {
  return String(racerCall("edge-label", from_, to, abox, type_of_substrate));
};
export const edge_label_m_ = (from_, to, abox, type_of_substrate) => {
  return racerCall("edge-label", from_, to, abox, type_of_substrate);
};
export const equivalent_m = (left, right) => {
  return String(racerCall("equivalent", left, right));
};
export const equivalent_m_ = (left, right) => {
  return racerCall("equivalent", left, right);
};
export const feature_m_p = (role_term, tbox_name) => {
  return Boolean(racerCall("feature?", role_term, tbox_name));
};
export const firerule_m = (key_args) => {
  return String(racerCall("firerule", key_args));
};
export const firerule_m_ = (key_args) => {
  return racerCall("firerule", key_args);
};
export const firerule_under_premise_m = (key_args) => {
  return String(racerCall("firerule-under-premise", key_args));
};
export const firerule_under_premise_m_ = (key_args) => {
  return racerCall("firerule-under-premise", key_args);
};
export const firerule_under_premise1_m = (key_args) => {
  return String(racerCall("firerule-under-premise1", key_args));
};
export const firerule_under_premise1_m_ = (key_args) => {
  return racerCall("firerule-under-premise1", key_args);
};
export const firerule1_m = (key_args) => {
  return String(racerCall("firerule1", key_args));
};
export const firerule1_m_ = (key_args) => {
  return racerCall("firerule1", key_args);
};
export const forget_m = (key_args) => {
  return String(racerCall("forget", key_args));
};
export const forget_m_ = (key_args) => {
  return racerCall("forget", key_args);
};
export const functional_m = (rolename, tbox) => {
  return String(racerCall("functional", rolename, tbox));
};
export const functional_m_ = (rolename, tbox) => {
  return racerCall("functional", rolename, tbox);
};
export const get_concept_definition_m = (concept_name, tbox) => {
  return String(racerCall("get-concept-definition", concept_name, tbox));
};
export const get_concept_definition_m_ = (concept_name, tbox) => {
  return racerCall("get-concept-definition", concept_name, tbox);
};
export const get_concept_negated_definition_m = (concept_name, tbox) => {
  return String(
    racerCall("get-concept-negated-definition", concept_name, tbox)
  );
};
export const get_concept_negated_definition_m_ = (concept_name, tbox) => {
  return racerCall("get-concept-negated-definition", concept_name, tbox);
};
export const implies_m = (left, right) => {
  return String(racerCall("implies", left, right));
};
export const implies_m_ = (left, right) => {
  return racerCall("implies", left, right);
};
export const implies_role_m = (rolename1, rolename2, tbox) => {
  return String(racerCall("implies-role", rolename1, rolename2, tbox));
};
export const implies_role_m_ = (rolename1, rolename2, tbox) => {
  return racerCall("implies-role", rolename1, rolename2, tbox);
};
export const in_abox_m = (abox_name, tbox_name) => {
  return String(racerCall("in-abox", abox_name, tbox_name));
};
export const in_abox_m_ = (abox_name, tbox_name) => {
  return racerCall("in-abox", abox_name, tbox_name);
};
export const in_data_box_m = (name) => {
  return String(racerCall("in-data-box", name));
};
export const in_data_box_m_ = (name) => {
  return racerCall("in-data-box", name);
};
export const in_knowledge_base_m = (key_args) => {
  return String(racerCall("in-knowledge-base", key_args));
};
export const in_knowledge_base_m_ = (key_args) => {
  return racerCall("in-knowledge-base", key_args);
};
export const in_mirror_data_box_m = (name) => {
  return String(racerCall("in-mirror-data-box", name));
};
export const in_mirror_data_box_m_ = (name) => {
  return racerCall("in-mirror-data-box", name);
};
export const in_rcc_box_m = (name, rcc_type, type_) => {
  return String(racerCall("in-rcc-box", name, rcc_type, type_));
};
export const in_rcc_box_m_ = (name, rcc_type, type_) => {
  return racerCall("in-rcc-box", name, rcc_type, type_);
};
export const in_tbox_m = (key_args) => {
  return String(racerCall("in-tbox", key_args));
};
export const in_tbox_m_ = (key_args) => {
  return racerCall("in-tbox", key_args);
};
export const individual_antonyms_m = (individual, told_only, abox_name) => {
  return String(
    racerCall("individual-antonyms", individual, told_only, abox_name)
  );
};
export const individual_antonyms_m_ = (individual, told_only, abox_name) => {
  return racerCall("individual-antonyms", individual, told_only, abox_name);
};
export const individual_attribute_fillers_m = (ind, attribute, abox) => {
  return String(
    racerCall("individual-attribute-fillers", ind, attribute, abox)
  );
};
export const individual_attribute_fillers_m_ = (ind, attribute, abox) => {
  return racerCall("individual-attribute-fillers", ind, attribute, abox);
};
export const individual_direct_types_m = (individual_name, abox) => {
  return String(racerCall("individual-direct-types", individual_name, abox));
};
export const individual_direct_types_m_ = (individual_name, abox) => {
  return racerCall("individual-direct-types", individual_name, abox);
};
export const individual_filled_roles_m = (
  ind_predecessor,
  ind_filler,
  abox
) => {
  return String(
    racerCall("individual-filled-roles", ind_predecessor, ind_filler, abox)
  );
};
export const individual_filled_roles_m_ = (
  ind_predecessor,
  ind_filler,
  abox
) => {
  return racerCall(
    "individual-filled-roles",
    ind_predecessor,
    ind_filler,
    abox
  );
};
export const individual_fillers_m = (ind_predecessor, role_term, abox) => {
  return String(
    racerCall("individual-fillers", ind_predecessor, role_term, abox)
  );
};
export const individual_fillers_m_ = (ind_predecessor, role_term, abox) => {
  return racerCall("individual-fillers", ind_predecessor, role_term, abox);
};
export const individual_instance_m_p = (individual, concept, abox) => {
  return Boolean(racerCall("individual-instance?", individual, concept, abox));
};
export const individual_synonyms_m = (individual, told_only, abox_name) => {
  return String(
    racerCall("individual-synonyms", individual, told_only, abox_name)
  );
};
export const individual_synonyms_m_ = (individual, told_only, abox_name) => {
  return racerCall("individual-synonyms", individual, told_only, abox_name);
};
export const individual_told_attribute_value_m = (ind, attribute, abox) => {
  return String(
    racerCall("individual-told-attribute-value", ind, attribute, abox)
  );
};
export const individual_told_attribute_value_m_ = (ind, attribute, abox) => {
  return racerCall("individual-told-attribute-value", ind, attribute, abox);
};
export const individual_told_datatype_fillers_m = (
  ind,
  datatype_role,
  abox
) => {
  return String(
    racerCall("individual-told-datatype-fillers", ind, datatype_role, abox)
  );
};
export const individual_told_datatype_fillers_m_ = (
  ind,
  datatype_role,
  abox
) => {
  return racerCall(
    "individual-told-datatype-fillers",
    ind,
    datatype_role,
    abox
  );
};
export const individual_types_m = (individual_name, abox) => {
  return String(racerCall("individual-types", individual_name, abox));
};
export const individual_types_m_ = (individual_name, abox) => {
  return racerCall("individual-types", individual_name, abox);
};
export const individual_m_p = (individual_name, abox_name) => {
  return Boolean(racerCall("individual?", individual_name, abox_name));
};
export const individuals_equal_m_p = (individual1, individual2, abox) => {
  return Boolean(
    racerCall("individuals-equal?", individual1, individual2, abox)
  );
};
export const individuals_not_equal_m_p = (individual1, individual2, abox) => {
  return Boolean(
    racerCall("individuals-not-equal?", individual1, individual2, abox)
  );
};
export const individuals_related_m_p = (
  individual1,
  individual2,
  role_term
) => {
  return Boolean(
    racerCall("individuals-related?", individual1, individual2, role_term)
  );
};
export const init_publications_m = (abox) => {
  return String(racerCall("init-publications", abox));
};
export const init_publications_m_ = (abox) => {
  return racerCall("init-publications", abox);
};
export const init_subscriptions_m = (abox) => {
  return String(racerCall("init-subscriptions", abox));
};
export const init_subscriptions_m_ = (abox) => {
  return racerCall("init-subscriptions", abox);
};
export const instance_m = (name, concept) => {
  return String(racerCall("instance", name, concept));
};
export const instance_m_ = (name, concept) => {
  return racerCall("instance", name, concept);
};
export const inverse_m = (rolename, inverse_role, tbox) => {
  return String(racerCall("inverse", rolename, inverse_role, tbox));
};
export const inverse_m_ = (rolename, inverse_role, tbox) => {
  return racerCall("inverse", rolename, inverse_role, tbox);
};
export const irreflexive_m = (rolename, tbox) => {
  return String(racerCall("irreflexive", rolename, tbox));
};
export const irreflexive_m_ = (rolename, tbox) => {
  return racerCall("irreflexive", rolename, tbox);
};
export const irreflexive_m_p = (role_term, tbox_name) => {
  return Boolean(racerCall("irreflexive?", role_term, tbox_name));
};
export const node_description_m = (name, abox, type_of_substrate) => {
  return String(racerCall("node-description", name, abox, type_of_substrate));
};
export const node_description_m_ = (name, abox, type_of_substrate) => {
  return racerCall("node-description", name, abox, type_of_substrate);
};
export const node_label_m = (name, abox, type_of_substrate) => {
  return String(racerCall("node-label", name, abox, type_of_substrate));
};
export const node_label_m_ = (name, abox, type_of_substrate) => {
  return racerCall("node-label", name, abox, type_of_substrate);
};
export const prepare_abox_query_m = (key_args) => {
  return String(racerCall("prepare-abox-query", key_args));
};
export const prepare_abox_query_m_ = (key_args) => {
  return racerCall("prepare-abox-query", key_args);
};
export const prepare_abox_query1_m = (key_args) => {
  return String(racerCall("prepare-abox-query1", key_args));
};
export const prepare_abox_query1_m_ = (key_args) => {
  return racerCall("prepare-abox-query1", key_args);
};
export const prepare_abox_rule_m = (key_args) => {
  return String(racerCall("prepare-abox-rule", key_args));
};
export const prepare_abox_rule_m_ = (key_args) => {
  return racerCall("prepare-abox-rule", key_args);
};
export const prepare_abox_rule1_m = (key_args) => {
  return String(racerCall("prepare-abox-rule1", key_args));
};
export const prepare_abox_rule1_m_ = (key_args) => {
  return racerCall("prepare-abox-rule1", key_args);
};
export const prepare_tbox_query_m = (key_args) => {
  return String(racerCall("prepare-tbox-query", key_args));
};
export const prepare_tbox_query_m_ = (key_args) => {
  return racerCall("prepare-tbox-query", key_args);
};
export const prepare_tbox_query1_m = (key_args) => {
  return String(racerCall("prepare-tbox-query1", key_args));
};
export const prepare_tbox_query1_m_ = (key_args) => {
  return racerCall("prepare-tbox-query1", key_args);
};
export const preprule_m = (key_args) => {
  return String(racerCall("preprule", key_args));
};
export const preprule_m_ = (key_args) => {
  return racerCall("preprule", key_args);
};
export const preprule1_m = (key_args) => {
  return String(racerCall("preprule1", key_args));
};
export const preprule1_m_ = (key_args) => {
  return racerCall("preprule1", key_args);
};
export const pretrieve_m = (key_args) => {
  return String(racerCall("pretrieve", key_args));
};
export const pretrieve_m_ = (key_args) => {
  return racerCall("pretrieve", key_args);
};
export const publish_m = (individual, abox) => {
  return String(racerCall("publish", individual, abox));
};
export const publish_m_ = (individual, abox) => {
  return racerCall("publish", individual, abox);
};
export const range_m = (rolename, concept, tbox, errorp) => {
  return String(racerCall("range", rolename, concept, tbox, errorp));
};
export const range_m_ = (rolename, concept, tbox, errorp) => {
  return racerCall("range", rolename, concept, tbox, errorp);
};
export const rcc_consistent_m_p = (abox, type_of_substrate) => {
  return Boolean(racerCall("rcc-consistent?", abox, type_of_substrate));
};
export const rcc_edge_m = () => {
  return String(racerCall("rcc-edge"));
};
export const rcc_edge_m_ = () => {
  return racerCall("rcc-edge");
};
export const rcc_edge_description_m = () => {
  return String(racerCall("rcc-edge-description"));
};
export const rcc_edge_description_m_ = () => {
  return racerCall("rcc-edge-description");
};
export const rcc_edge_label_m = () => {
  return String(racerCall("rcc-edge-label"));
};
export const rcc_edge_label_m_ = () => {
  return racerCall("rcc-edge-label");
};
export const rcc_instance_m = () => {
  return String(racerCall("rcc-instance"));
};
export const rcc_instance_m_ = () => {
  return racerCall("rcc-instance");
};
export const rcc_node_m = () => {
  return String(racerCall("rcc-node"));
};
export const rcc_node_m_ = () => {
  return racerCall("rcc-node");
};
export const rcc_node_description_m = () => {
  return String(racerCall("rcc-node-description"));
};
export const rcc_node_description_m_ = () => {
  return racerCall("rcc-node-description");
};
export const rcc_node_label_m = () => {
  return String(racerCall("rcc-node-label"));
};
export const rcc_node_label_m_ = () => {
  return racerCall("rcc-node-label");
};
export const rcc_related_m = () => {
  return String(racerCall("rcc-related"));
};
export const rcc_related_m_ = () => {
  return racerCall("rcc-related");
};
export const rcc_synonym_m = (role, rcc_relation) => {
  return String(racerCall("rcc-synonym", role, rcc_relation));
};
export const rcc_synonym_m_ = (role, rcc_relation) => {
  return racerCall("rcc-synonym", role, rcc_relation);
};
export const reflexive_m = (rolename, tbox) => {
  return String(racerCall("reflexive", rolename, tbox));
};
export const reflexive_m_ = (rolename, tbox) => {
  return racerCall("reflexive", rolename, tbox);
};
export const reflexive_m_p = (role_term, tbox_name) => {
  return Boolean(racerCall("reflexive?", role_term, tbox_name));
};
export const related_m = (left_name, right_name, role_name) => {
  return String(racerCall("related", left_name, right_name, role_name));
};
export const related_m_ = (left_name, right_name, role_name) => {
  return racerCall("related", left_name, right_name, role_name);
};
export const related_individuals_m = (role_term, abox_name) => {
  return String(racerCall("related-individuals", role_term, abox_name));
};
export const related_individuals_m_ = (role_term, abox_name) => {
  return racerCall("related-individuals", role_term, abox_name);
};
export const retrieve_m = (key_args) => {
  return String(racerCall("retrieve", key_args));
};
export const retrieve_m_ = (key_args) => {
  return racerCall("retrieve", key_args);
};
export const retrieve_under_premise_m = (key_args) => {
  return String(racerCall("retrieve-under-premise", key_args));
};
export const retrieve_under_premise_m_ = (key_args) => {
  return racerCall("retrieve-under-premise", key_args);
};
export const retrieve_under_premise1_m = (key_args) => {
  return String(racerCall("retrieve-under-premise1", key_args));
};
export const retrieve_under_premise1_m_ = (key_args) => {
  return racerCall("retrieve-under-premise1", key_args);
};
export const retrieve_with_explanation_m = (key_args) => {
  return String(racerCall("retrieve-with-explanation", key_args));
};
export const retrieve_with_explanation_m_ = (key_args) => {
  return racerCall("retrieve-with-explanation", key_args);
};
export const retrieve1_m = (key_args) => {
  return String(racerCall("retrieve1", key_args));
};
export const retrieve1_m_ = (key_args) => {
  return racerCall("retrieve1", key_args);
};
export const role_ancestors_m = (role_term, tbox) => {
  return String(racerCall("role-ancestors", role_term, tbox));
};
export const role_ancestors_m_ = (role_term, tbox) => {
  return racerCall("role-ancestors", role_term, tbox);
};
export const role_children_m = (role_term, tbox) => {
  return String(racerCall("role-children", role_term, tbox));
};
export const role_children_m_ = (role_term, tbox) => {
  return racerCall("role-children", role_term, tbox);
};
export const role_descendants_m = (role_term, tbox) => {
  return String(racerCall("role-descendants", role_term, tbox));
};
export const role_descendants_m_ = (role_term, tbox) => {
  return racerCall("role-descendants", role_term, tbox);
};
export const role_disjoint_m_p = (role_term1, role_term2, tbox) => {
  return Boolean(racerCall("role-disjoint?", role_term1, role_term2, tbox));
};
export const role_domain_m = (role_term, tbox) => {
  return String(racerCall("role-domain", role_term, tbox));
};
export const role_domain_m_ = (role_term, tbox) => {
  return racerCall("role-domain", role_term, tbox);
};
export const role_equivalent_m_p = (role_term1, role_term2, tbox) => {
  return Boolean(racerCall("role-equivalent?", role_term1, role_term2, tbox));
};
export const role_inverse_m = (role_term, tbox) => {
  return String(racerCall("role-inverse", role_term, tbox));
};
export const role_inverse_m_ = (role_term, tbox) => {
  return racerCall("role-inverse", role_term, tbox);
};
export const role_parents_m = (role_term, tbox) => {
  return String(racerCall("role-parents", role_term, tbox));
};
export const role_parents_m_ = (role_term, tbox) => {
  return racerCall("role-parents", role_term, tbox);
};
export const role_range_m = (role_term, tbox) => {
  return String(racerCall("role-range", role_term, tbox));
};
export const role_range_m_ = (role_term, tbox) => {
  return racerCall("role-range", role_term, tbox);
};
export const role_satisfiable_m_p = (role, tbox) => {
  return Boolean(racerCall("role-satisfiable?", role, tbox));
};
export const role_subsumes_m_p = (role_term1, role_term2, tbox) => {
  return Boolean(racerCall("role-subsumes?", role_term1, role_term2, tbox));
};
export const role_synonyms_m = (role_term, tbox) => {
  return String(racerCall("role-synonyms", role_term, tbox));
};
export const role_synonyms_m_ = (role_term, tbox) => {
  return racerCall("role-synonyms", role_term, tbox);
};
export const role_m_p = (role_term, tbox_name) => {
  return Boolean(racerCall("role?", role_term, tbox_name));
};
export const roles_disjoint_m = (role1, role2, tbox) => {
  return String(racerCall("roles-disjoint", role1, role2, tbox));
};
export const roles_disjoint_m_ = (role1, role2, tbox) => {
  return racerCall("roles-disjoint", role1, role2, tbox);
};
export const roles_equivalent_m = (role1, role2, tbox) => {
  return String(racerCall("roles-equivalent", role1, role2, tbox));
};
export const roles_equivalent_m_ = (role1, role2, tbox) => {
  return racerCall("roles-equivalent", role1, role2, tbox);
};
export const same_as_m = (individual_name1, individual_name2) => {
  return String(racerCall("same-as", individual_name1, individual_name2));
};
export const same_as_m_ = (individual_name1, individual_name2) => {
  return racerCall("same-as", individual_name1, individual_name2);
};
export const same_individual_as_m = (individual_name1, individual_name2) => {
  return String(
    racerCall("same-individual-as", individual_name1, individual_name2)
  );
};
export const same_individual_as_m_ = (individual_name1, individual_name2) => {
  return racerCall("same-individual-as", individual_name1, individual_name2);
};
export const signature_m = (key_args) => {
  return String(racerCall("signature", key_args));
};
export const signature_m_ = (key_args) => {
  return racerCall("signature", key_args);
};
export const sparql_answer_query_m = (key_args) => {
  return String(racerCall("sparql-answer-query", key_args));
};
export const sparql_answer_query_m_ = (key_args) => {
  return racerCall("sparql-answer-query", key_args);
};
export const sparql_retrieve_m = (key_args) => {
  return String(racerCall("sparql-retrieve", key_args));
};
export const sparql_retrieve_m_ = (key_args) => {
  return racerCall("sparql-retrieve", key_args);
};
export const state_m = (key_args) => {
  return String(racerCall("state", key_args));
};
export const state_m_ = (key_args) => {
  return racerCall("state", key_args);
};
export const subscribe_m = (subscriber, query_concept, abox, ip, port) => {
  return String(
    racerCall("subscribe", subscriber, query_concept, abox, ip, port, port)
  );
};
export const subscribe_m_ = (subscriber, query_concept, abox, ip, port) => {
  return racerCall("subscribe", subscriber, query_concept, abox, ip, port, ip);
};
export const symmetric_m = (rolename, tbox) => {
  return String(racerCall("symmetric", rolename, tbox));
};
export const symmetric_m_ = (rolename, tbox) => {
  return racerCall("symmetric", rolename, tbox);
};
export const symmetric_m_p = (role_term, tbox_name) => {
  return Boolean(racerCall("symmetric?", role_term, tbox_name));
};
export const tbox_classified_m_p = (tbox_name) => {
  return Boolean(racerCall("tbox-classified?", tbox_name));
};
export const tbox_coherent_m_p = (tbox_name) => {
  return Boolean(racerCall("tbox-coherent?", tbox_name));
};
export const tbox_cyclic_m_p = (tbox_name) => {
  return Boolean(racerCall("tbox-cyclic?", tbox_name));
};
export const tbox_prepared_m_p = (tbox_name) => {
  return Boolean(racerCall("tbox-prepared?", tbox_name));
};
export const tbox_retrieve_m = (key_args) => {
  return String(racerCall("tbox-retrieve", key_args));
};
export const tbox_retrieve_m_ = (key_args) => {
  return racerCall("tbox-retrieve", key_args);
};
export const tbox_retrieve1_m = (key_args) => {
  return String(racerCall("tbox-retrieve1", key_args));
};
export const tbox_retrieve1_m_ = (key_args) => {
  return racerCall("tbox-retrieve1", key_args);
};
export const timenet_retrieve_m = (key_args) => {
  return String(racerCall("timenet-retrieve", key_args));
};
export const timenet_retrieve_m_ = (key_args) => {
  return racerCall("timenet-retrieve", key_args);
};
export const transitive_m = (rolename, tbox) => {
  return String(racerCall("transitive", rolename, tbox));
};
export const transitive_m_ = (rolename, tbox) => {
  return racerCall("transitive", rolename, tbox);
};
export const transitive_m_p = (role_term, tbox_name) => {
  return Boolean(racerCall("transitive?", role_term, tbox_name));
};
export const unbind_m = (name) => {
  return String(racerCall("unbind", name));
};
export const unbind_m_ = (name) => {
  return racerCall("unbind", name);
};
export const undefine_m = (name) => {
  return String(racerCall("undefine", name));
};
export const undefine_m_ = (name) => {
  return racerCall("undefine", name);
};
export const undefquery_m = (key_args) => {
  return String(racerCall("undefquery", key_args));
};
export const undefquery_m_ = (key_args) => {
  return racerCall("undefquery", key_args);
};
export const unpublish_m = (individual, abox) => {
  return String(racerCall("unpublish", individual, abox));
};
export const unpublish_m_ = (individual, abox) => {
  return racerCall("unpublish", individual, abox);
};
export const unrelated_m = (left_name, right_name, role_name) => {
  return String(racerCall("unrelated", left_name, right_name, role_name));
};
export const unrelated_m_ = (left_name, right_name, role_name) => {
  return racerCall("unrelated", left_name, right_name, role_name);
};
export const unsubscribe_m = (subscriber, query_concept, abox) => {
  return String(racerCall("unsubscribe", subscriber, query_concept, abox));
};
export const unsubscribe_m_ = (subscriber, query_concept, abox) => {
  return racerCall("unsubscribe", subscriber, query_concept, abox);
};
export const xml_output_m = (expr) => {
  return String(racerCall("xml-output", expr));
};
export const xml_output_m_ = (expr) => {
  return racerCall("xml-output", expr);
};
export const xml_native_output_m = (expr) => {
  return String(racerCall("xml-native-output", expr));
};
export const xml_native_output_m_ = (expr) => {
  return racerCall("xml-native-output", expr);
};
export const xml_input_m = (expr) => {
  return String(racerCall("xml-input", expr));
};
export const xml_input_m_ = (expr) => {
  return racerCall("xml-input", expr);
};
export const owlapi_get_last_output_stream_string_m = (reasoner) => {
  return String(
    racerCall("|_o_w_l_a_p_i-get_last_output_stream_string|", reasoner)
  );
};
export const owlapi_get_last_output_stream_string_m_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_last_output_stream_string|", reasoner);
};
export const owlapi_get_last_answer_m = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-get_last_answer|", reasoner));
};
export const owlapi_get_last_answer_m_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_last_answer|", reasoner);
};
export const owlapi_get_i_ds_of_last_answer_m = (reasoner) => {
  return String(racerCall("|_o_w_l_a_p_i-get_i_ds_of_last_answer|", reasoner));
};
export const owlapi_get_i_ds_of_last_answer_m_ = (reasoner) => {
  return racerCall("|_o_w_l_a_p_i-get_i_ds_of_last_answer|", reasoner);
};
export const get_namespace_prefixes_m = () => {
  return String(racerCall("get-namespace-prefixes"));
};
export const get_namespace_prefixes_m_ = () => {
  return racerCall("get-namespace-prefixes");
};
export const ensure_small_tboxes_m = () => {
  return String(racerCall("ensure-small-tboxes"));
};
export const ensure_small_tboxes_m_ = () => {
  return racerCall("ensure-small-tboxes");
};
export const evaluate_m = (expr) => {
  return String(racerCall("evaluate", expr));
};
export const evaluate_m_ = (expr) => {
  return racerCall("evaluate", expr);
};
export const evaluate1_m = (expr) => {
  return String(racerCall("evaluate1", expr));
};
export const evaluate1_m_ = (expr) => {
  return racerCall("evaluate1", expr);
};
export const exit_server = () => {
  try {
    String(racerCall("exit-server "));
  } catch (e) {
    return true;
  }
  return false;
};
