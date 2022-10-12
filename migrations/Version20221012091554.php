<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221012091554 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE patients_contacts (id INT AUTO_INCREMENT NOT NULL, cont_id INT DEFAULT NULL, pati_id INT DEFAULT NULL, sugg_id INT DEFAULT NULL, link_description LONGTEXT DEFAULT NULL, start DATE DEFAULT NULL, end DATE DEFAULT NULL, is_highlight INT DEFAULT NULL, deleted_at DATE DEFAULT NULL, INDEX IDX_EE6A617285CFD64C (cont_id), INDEX IDX_EE6A617261D0310E (pati_id), INDEX IDX_EE6A6172FE0F17F (sugg_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A617285CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id)');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A617261D0310E FOREIGN KEY (pati_id) REFERENCES patients (id)');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A6172FE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id)');
        $this->addSql('ALTER TABLE paatients_contacts DROP FOREIGN KEY FK_190199F461D0310E');
        $this->addSql('ALTER TABLE paatients_contacts DROP FOREIGN KEY FK_190199F485CFD64C');
        $this->addSql('ALTER TABLE paatients_contacts DROP FOREIGN KEY FK_190199F4FE0F17F');
        $this->addSql('DROP TABLE paatients_contacts');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE paatients_contacts (id INT AUTO_INCREMENT NOT NULL, cont_id INT DEFAULT NULL, pati_id INT DEFAULT NULL, sugg_id INT DEFAULT NULL, link_description LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci`, start DATE DEFAULT NULL, end DATE DEFAULT NULL, is_highlight INT DEFAULT NULL, deleted_at DATE DEFAULT NULL, INDEX IDX_190199F485CFD64C (cont_id), INDEX IDX_190199F461D0310E (pati_id), INDEX IDX_190199F4FE0F17F (sugg_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE paatients_contacts ADD CONSTRAINT FK_190199F461D0310E FOREIGN KEY (pati_id) REFERENCES patients (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE paatients_contacts ADD CONSTRAINT FK_190199F485CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE paatients_contacts ADD CONSTRAINT FK_190199F4FE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A617285CFD64C');
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A617261D0310E');
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A6172FE0F17F');
        $this->addSql('DROP TABLE patients_contacts');
    }
}
