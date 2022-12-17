<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221217164344 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_information DROP FOREIGN KEY FK_B853074D61D0310E');
        $this->addSql('ALTER TABLE patients_information ADD CONSTRAINT FK_B853074D61D0310E FOREIGN KEY (pati_id) REFERENCES patients (id) ON DELETE SET NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_information DROP FOREIGN KEY FK_B853074D61D0310E');
        $this->addSql('ALTER TABLE patients_information ADD CONSTRAINT FK_B853074D61D0310E FOREIGN KEY (pati_id) REFERENCES patients (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
    }
}
