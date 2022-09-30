<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220929071729 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE patients_information (id INT AUTO_INCREMENT NOT NULL, pati_id INT DEFAULT NULL, sugg_id INT DEFAULT NULL, value LONGTEXT DEFAULT NULL, comment LONGTEXT DEFAULT NULL, is_confidential SMALLINT DEFAULT NULL, is_highlight SMALLINT DEFAULT NULL, start DATE DEFAULT NULL, end DATE DEFAULT NULL, deleted_at DATE DEFAULT NULL, inaccurate SMALLINT DEFAULT NULL, start_inaccurate SMALLINT DEFAULT NULL, end_inaccurate SMALLINT DEFAULT NULL, INDEX IDX_B853074D61D0310E (pati_id), INDEX IDX_B853074DFE0F17F (sugg_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE patients_information_template_block (id INT AUTO_INCREMENT NOT NULL, sugb_id INT DEFAULT NULL, block_order INT DEFAULT NULL, INDEX IDX_F92ECE76383E014D (sugb_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE patients_information ADD CONSTRAINT FK_B853074D61D0310E FOREIGN KEY (pati_id) REFERENCES patients (id)');
        $this->addSql('ALTER TABLE patients_information ADD CONSTRAINT FK_B853074DFE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id)');
        $this->addSql('ALTER TABLE patients_information_template_block ADD CONSTRAINT FK_F92ECE76383E014D FOREIGN KEY (sugb_id) REFERENCES suggestions (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_information DROP FOREIGN KEY FK_B853074D61D0310E');
        $this->addSql('ALTER TABLE patients_information DROP FOREIGN KEY FK_B853074DFE0F17F');
        $this->addSql('ALTER TABLE patients_information_template_block DROP FOREIGN KEY FK_F92ECE76383E014D');
        $this->addSql('DROP TABLE patients_information');
        $this->addSql('DROP TABLE patients_information_template_block');
    }
}
