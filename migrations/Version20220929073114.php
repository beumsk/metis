<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220929073114 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE patients_information_template_element (id INT AUTO_INCREMENT NOT NULL, pitb_id INT DEFAULT NULL, suge_id INT DEFAULT NULL, sugv_id INT DEFAULT NULL, required SMALLINT DEFAULT NULL, element_order INT DEFAULT NULL, edit_type INT NOT NULL, type INT NOT NULL, INDEX IDX_8D20550C5A823462 (pitb_id), INDEX IDX_8D20550CA5E939F4 (suge_id), INDEX IDX_8D20550CE745C185 (sugv_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE patients_information_template_element ADD CONSTRAINT FK_8D20550C5A823462 FOREIGN KEY (pitb_id) REFERENCES patients_information_template_block (id)');
        $this->addSql('ALTER TABLE patients_information_template_element ADD CONSTRAINT FK_8D20550CA5E939F4 FOREIGN KEY (suge_id) REFERENCES suggestions (id)');
        $this->addSql('ALTER TABLE patients_information_template_element ADD CONSTRAINT FK_8D20550CE745C185 FOREIGN KEY (sugv_id) REFERENCES suggestions (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_information_template_element DROP FOREIGN KEY FK_8D20550C5A823462');
        $this->addSql('ALTER TABLE patients_information_template_element DROP FOREIGN KEY FK_8D20550CA5E939F4');
        $this->addSql('ALTER TABLE patients_information_template_element DROP FOREIGN KEY FK_8D20550CE745C185');
        $this->addSql('DROP TABLE patients_information_template_element');
    }
}
