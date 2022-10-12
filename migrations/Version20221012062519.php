<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221012062519 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE patients_patients (id INT AUTO_INCREMENT NOT NULL, tapa_id INT DEFAULT NULL, orpa_id INT DEFAULT NULL, sugg_id INT DEFAULT NULL, link_description LONGTEXT DEFAULT NULL, start DATE DEFAULT NULL, end DATE DEFAULT NULL, is_highlight INT NOT NULL, deleted_at DATE DEFAULT NULL, INDEX IDX_F1E65A2DA5AB9B32 (tapa_id), INDEX IDX_F1E65A2D45302333 (orpa_id), INDEX IDX_F1E65A2DFE0F17F (sugg_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE patients_patients ADD CONSTRAINT FK_F1E65A2DA5AB9B32 FOREIGN KEY (tapa_id) REFERENCES patients (id)');
        $this->addSql('ALTER TABLE patients_patients ADD CONSTRAINT FK_F1E65A2D45302333 FOREIGN KEY (orpa_id) REFERENCES patients (id)');
        $this->addSql('ALTER TABLE patients_patients ADD CONSTRAINT FK_F1E65A2DFE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_patients DROP FOREIGN KEY FK_F1E65A2DA5AB9B32');
        $this->addSql('ALTER TABLE patients_patients DROP FOREIGN KEY FK_F1E65A2D45302333');
        $this->addSql('ALTER TABLE patients_patients DROP FOREIGN KEY FK_F1E65A2DFE0F17F');
        $this->addSql('DROP TABLE patients_patients');
    }
}
