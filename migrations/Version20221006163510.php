<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221006163510 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE followup_goals (id INT AUTO_INCREMENT NOT NULL, pati_id INT DEFAULT NULL, parent_fogo_id INT DEFAULT NULL, cont_id INT DEFAULT NULL, sugg_id INT DEFAULT NULL, func_id INT DEFAULT NULL, title VARCHAR(255) DEFAULT NULL, status INT NOT NULL, description LONGTEXT DEFAULT NULL, delete_at DATE DEFAULT NULL, type INT NOT NULL, is_highlight INT DEFAULT NULL, creation_date DATETIME DEFAULT NULL, INDEX IDX_BB997A6B61D0310E (pati_id), INDEX IDX_BB997A6B2FB73F42 (parent_fogo_id), INDEX IDX_BB997A6B85CFD64C (cont_id), INDEX IDX_BB997A6BFE0F17F (sugg_id), INDEX IDX_BB997A6BB874B730 (func_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE followup_goals ADD CONSTRAINT FK_BB997A6B61D0310E FOREIGN KEY (pati_id) REFERENCES patients (id)');
        $this->addSql('ALTER TABLE followup_goals ADD CONSTRAINT FK_BB997A6B2FB73F42 FOREIGN KEY (parent_fogo_id) REFERENCES followup_goals (id)');
        $this->addSql('ALTER TABLE followup_goals ADD CONSTRAINT FK_BB997A6B85CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id)');
        $this->addSql('ALTER TABLE followup_goals ADD CONSTRAINT FK_BB997A6BFE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id)');
        $this->addSql('ALTER TABLE followup_goals ADD CONSTRAINT FK_BB997A6BB874B730 FOREIGN KEY (func_id) REFERENCES suggestions (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_goals DROP FOREIGN KEY FK_BB997A6B61D0310E');
        $this->addSql('ALTER TABLE followup_goals DROP FOREIGN KEY FK_BB997A6B2FB73F42');
        $this->addSql('ALTER TABLE followup_goals DROP FOREIGN KEY FK_BB997A6B85CFD64C');
        $this->addSql('ALTER TABLE followup_goals DROP FOREIGN KEY FK_BB997A6BFE0F17F');
        $this->addSql('ALTER TABLE followup_goals DROP FOREIGN KEY FK_BB997A6BB874B730');
        $this->addSql('DROP TABLE followup_goals');
    }
}
