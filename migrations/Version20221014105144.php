<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221014105144 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_information ADD CONSTRAINT FK_B853074D61D0310E FOREIGN KEY (pati_id) REFERENCES patients (id)');
        $this->addSql('ALTER TABLE patients_information ADD CONSTRAINT FK_B853074DFE0F17F FOREIGN KEY (sugg_id) REFERENCES suggestions (id) ON DELETE SET NULL');
        $this->addSql('ALTER TABLE patients_information ADD CONSTRAINT FK_B853074DAAD3353B FOREIGN KEY (itel_id) REFERENCES information_template_element (id) ON DELETE SET NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_information DROP FOREIGN KEY FK_B853074D61D0310E');
        $this->addSql('ALTER TABLE patients_information DROP FOREIGN KEY FK_B853074DFE0F17F');
        $this->addSql('ALTER TABLE patients_information DROP FOREIGN KEY FK_B853074DAAD3353B');
    }
}
