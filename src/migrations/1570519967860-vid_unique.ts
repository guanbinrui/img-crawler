import {MigrationInterface, QueryRunner} from "typeorm";

export class vidUnique1570519967860 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "UQ_5ed10fd6122688945554c23b093" UNIQUE ("vid")`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "UQ_5ed10fd6122688945554c23b093"`, undefined);
    }

}
