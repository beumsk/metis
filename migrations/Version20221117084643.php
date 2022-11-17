<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221117084643 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_contacts DROP FOREIGN KEY FK_EE6A617261D0310E');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_contacts ADD CONSTRAINT FK_EE6A617261D0310E FOREIGN KEY (pati_id) REFERENCES patients (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
    }
}
