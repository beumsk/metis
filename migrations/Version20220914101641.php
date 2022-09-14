<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220914101641 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_goals ADD pati_id INT NOT NULL');
        $this->addSql('ALTER TABLE followup_goals ADD CONSTRAINT FK_BB997A6B61D0310E FOREIGN KEY (pati_id) REFERENCES patients (id)');
        $this->addSql('CREATE INDEX IDX_BB997A6B61D0310E ON followup_goals (pati_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_goals DROP FOREIGN KEY FK_BB997A6B61D0310E');
        $this->addSql('DROP INDEX IDX_BB997A6B61D0310E ON followup_goals');
        $this->addSql('ALTER TABLE followup_goals DROP pati_id');
    }
}
