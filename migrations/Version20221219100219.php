<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221219100219 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_patients DROP FOREIGN KEY FK_F1E65A2DB82AD666');
        $this->addSql('ALTER TABLE patients_patients DROP FOREIGN KEY FK_F1E65A2DFE0F17F');
        $this->addSql('DROP INDEX IDX_F1E65A2DB82AD666 ON patients_patients');
        $this->addSql('ALTER TABLE patients_patients DROP link_type_id');
        $this->addSql('ALTER TABLE patients_patients ADD CONSTRAINT FK_F1E65A2DFE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id) ON DELETE SET NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_patients DROP FOREIGN KEY FK_F1E65A2DFE0F17F');
        $this->addSql('ALTER TABLE patients_patients ADD link_type_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients_patients ADD CONSTRAINT FK_F1E65A2DB82AD666 FOREIGN KEY (link_type_id) REFERENCES suggestions (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('ALTER TABLE patients_patients ADD CONSTRAINT FK_F1E65A2DFE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_F1E65A2DB82AD666 ON patients_patients (link_type_id)');
    }
}
