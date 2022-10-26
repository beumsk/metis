<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221026082556 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE patients_places (id INT AUTO_INCREMENT NOT NULL, cont_id INT DEFAULT NULL, sugg_id INT DEFAULT NULL, pati_id INT DEFAULT NULL, inaccurate INT DEFAULT NULL, start DATETIME DEFAULT NULL, start_inaccurate INT DEFAULT NULL, end DATETIME DEFAULT NULL, end_inaccurate INT DEFAULT NULL, is_highlight INT DEFAULT NULL, is_streetplace INT DEFAULT NULL, is_refaddress INT DEFAULT NULL, deleted_at DATETIME DEFAULT NULL, comment LONGTEXT DEFAULT NULL, INDEX IDX_F426A92485CFD64C (cont_id), INDEX IDX_F426A924FE0F17F (sugg_id), INDEX IDX_F426A92461D0310E (pati_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE patients_places ADD CONSTRAINT FK_F426A92485CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id)');
        $this->addSql('ALTER TABLE patients_places ADD CONSTRAINT FK_F426A924FE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id)');
        $this->addSql('ALTER TABLE patients_places ADD CONSTRAINT FK_F426A92461D0310E FOREIGN KEY (pati_id) REFERENCES patients (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_places DROP FOREIGN KEY FK_F426A92485CFD64C');
        $this->addSql('ALTER TABLE patients_places DROP FOREIGN KEY FK_F426A924FE0F17F');
        $this->addSql('ALTER TABLE patients_places DROP FOREIGN KEY FK_F426A92461D0310E');
        $this->addSql('DROP TABLE patients_places');
    }
}
