import { Migration } from '@mikro-orm/migrations';

export class Migration20210614013837 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "post" rename column "upodated_at" to "updated_at";');
  }

}
