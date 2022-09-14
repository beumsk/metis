<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220914122447 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE medias ADD pati_id INT NOT NULL');
        $this->addSql('ALTER TABLE medias ADD CONSTRAINT FK_12D2AF8161D0310E FOREIGN KEY (pati_id) REFERENCES patients (id)');
        $this->addSql('CREATE INDEX IDX_12D2AF8161D0310E ON medias (pati_id)');
        $this->addSql('ALTER TABLE patients ADD no_id INT NOT NULL');
        $this->addSql('ALTER TABLE patients ADD CONSTRAINT FK_2CCC2E2C1A65C546 FOREIGN KEY (no_id) REFERENCES medias (id)');
        $this->addSql('CREATE INDEX IDX_2CCC2E2C1A65C546 ON patients (no_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE medias DROP FOREIGN KEY FK_12D2AF8161D0310E');
        $this->addSql('DROP INDEX IDX_12D2AF8161D0310E ON medias');
        $this->addSql('ALTER TABLE medias DROP pati_id');
        $this->addSql('ALTER TABLE patients DROP FOREIGN KEY FK_2CCC2E2C1A65C546');
        $this->addSql('DROP INDEX IDX_2CCC2E2C1A65C546 ON patients');
        $this->addSql('ALTER TABLE patients DROP no_id');
    }
}
