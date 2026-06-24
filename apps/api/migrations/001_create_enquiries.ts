import type { MigrationBuilder } from "node-pg-migrate";

export const up = (pgm: MigrationBuilder) => {
  pgm.createTable("enquiries", {
    id: { type: "uuid", primaryKey: true, default: pgm.func("gen_random_uuid()") },
    name: { type: "varchar(120)", notNull: true },
    email: { type: "varchar(254)", notNull: true },
    service: { type: "varchar(40)", notNull: true },
    message: { type: "text", notNull: true },
    created_at: { type: "timestamptz", notNull: true, default: pgm.func("now()") },
  });
};

export const down = (pgm: MigrationBuilder) => {
  pgm.dropTable("enquiries");
};
