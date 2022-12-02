<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221201104204 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A6172B82AD666');
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A6172FE0F17F');
        $this->addSql('DROP INDEX IDX_EE6A6172B82AD666 ON patients_contacts');
        $this->addSql('ALTER TABLE patients_contacts DROP link_type_id');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A6172FE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id) ON DELETE SET NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A6172FE0F17F');
        $this->addSql('ALTER TABLE patients_contacts ADD link_type_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A6172B82AD666 FOREIGN KEY (link_type_id) REFERENCES suggestions (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A6172FE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_EE6A6172B82AD666 ON patients_contacts (link_type_id)');
    }
}