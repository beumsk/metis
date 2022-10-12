<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221012065201 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_places ADD cont_id INT DEFAULT NULL, ADD pati_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients_places ADD CONSTRAINT FK_F426A92485CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id)');
        $this->addSql('ALTER TABLE patients_places ADD CONSTRAINT FK_F426A92461D0310E FOREIGN KEY (pati_id) REFERENCES patients (id)');
        $this->addSql('CREATE INDEX IDX_F426A92485CFD64C ON patients_places (cont_id)');
        $this->addSql('CREATE INDEX IDX_F426A92461D0310E ON patients_places (pati_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_places DROP FOREIGN KEY FK_F426A92485CFD64C');
        $this->addSql('ALTER TABLE patients_places DROP FOREIGN KEY FK_F426A92461D0310E');
        $this->addSql('DROP INDEX IDX_F426A92485CFD64C ON patients_places');
        $this->addSql('DROP INDEX IDX_F426A92461D0310E ON patients_places');
        $this->addSql('ALTER TABLE patients_places DROP cont_id, DROP pati_id');
    }
}
