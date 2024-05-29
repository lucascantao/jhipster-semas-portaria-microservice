package br.gov.pa.semas.portarias.domain;

import static br.gov.pa.semas.portarias.domain.AssertUtils.zonedDataTimeSameInstant;
import static org.assertj.core.api.Assertions.assertThat;

public class AssuntoAsserts {

    /**
     * Asserts that the entity has all properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAssuntoAllPropertiesEquals(Assunto expected, Assunto actual) {
        assertAssuntoAutoGeneratedPropertiesEquals(expected, actual);
        assertAssuntoAllUpdatablePropertiesEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all updatable properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAssuntoAllUpdatablePropertiesEquals(Assunto expected, Assunto actual) {
        assertAssuntoUpdatableFieldsEquals(expected, actual);
        assertAssuntoUpdatableRelationshipsEquals(expected, actual);
    }

    /**
     * Asserts that the entity has all the auto generated properties (fields/relationships) set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAssuntoAutoGeneratedPropertiesEquals(Assunto expected, Assunto actual) {
        assertThat(expected)
            .as("Verify Assunto auto generated properties")
            .satisfies(e -> assertThat(e.getId()).as("check id").isEqualTo(actual.getId()));
    }

    /**
     * Asserts that the entity has all the updatable fields set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAssuntoUpdatableFieldsEquals(Assunto expected, Assunto actual) {
        assertThat(expected)
            .as("Verify Assunto relevant properties")
            .satisfies(e -> assertThat(e.getNome()).as("check nome").isEqualTo(actual.getNome()))
            .satisfies(e -> assertThat(e.getDescricao()).as("check descricao").isEqualTo(actual.getDescricao()))
            .satisfies(
                e ->
                    assertThat(e.getCreatedAt())
                        .as("check createdAt")
                        .usingComparator(zonedDataTimeSameInstant)
                        .isEqualTo(actual.getCreatedAt())
            )
            .satisfies(
                e ->
                    assertThat(e.getUpdatedAt())
                        .as("check updatedAt")
                        .usingComparator(zonedDataTimeSameInstant)
                        .isEqualTo(actual.getUpdatedAt())
            )
            .satisfies(
                e ->
                    assertThat(e.getDeletedAt())
                        .as("check deletedAt")
                        .usingComparator(zonedDataTimeSameInstant)
                        .isEqualTo(actual.getDeletedAt())
            );
    }

    /**
     * Asserts that the entity has all the updatable relationships set.
     *
     * @param expected the expected entity
     * @param actual the actual entity
     */
    public static void assertAssuntoUpdatableRelationshipsEquals(Assunto expected, Assunto actual) {
        assertThat(expected)
            .as("Verify Assunto relationships")
            .satisfies(e -> assertThat(e.getTopicos()).as("check topicos").isEqualTo(actual.getTopicos()));
    }
}
