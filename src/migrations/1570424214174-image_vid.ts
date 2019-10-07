import { MigrationInterface, QueryRunner } from 'typeorm';

export class imageVid1570424214174 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "vid"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "image" ADD "vid" character varying NOT NULL`,
      undefined
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`ALTER TABLE "image" DROP COLUMN "vid"`, undefined);
    await queryRunner.query(
      `ALTER TABLE "image" ADD "vid" bigint NOT NULL`,
      undefined
    );
  }
}
