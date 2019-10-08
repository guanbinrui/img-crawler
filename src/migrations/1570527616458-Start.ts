import {MigrationInterface, QueryRunner} from "typeorm";

export class Start1570527616458 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "vendor" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_f61018bdc439c6d1a941261b671" UNIQUE ("name"), CONSTRAINT "PK_931a23f6231a57604f5a0e32780" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "image" ("id" SERIAL NOT NULL, "vid" character varying NOT NULL, "vendorId" integer, CONSTRAINT "UQ_5ed10fd6122688945554c23b093" UNIQUE ("vid"), CONSTRAINT "PK_d6db1ab4ee9ad9dbe86c64e4cc3" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "image" ADD CONSTRAINT "FK_3a8a1ed0ec3e3c176c5225456eb" FOREIGN KEY ("vendorId") REFERENCES "vendor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "image" DROP CONSTRAINT "FK_3a8a1ed0ec3e3c176c5225456eb"`, undefined);
        await queryRunner.query(`DROP TABLE "image"`, undefined);
        await queryRunner.query(`DROP TABLE "vendor"`, undefined);
    }

}
