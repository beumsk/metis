<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221008154133 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contacts CHANGE url url LONGTEXT DEFAULT NULL');
        $this->addSql('ALTER TABLE followup_goals DROP FOREIGN KEY FK_BB997A6B85CFD64C');
        $this->addSql('ALTER TABLE followup_goals ADD CONSTRAINT FK_BB997A6B85CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id) ON DELETE SET NULL');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE contacts CHANGE url url LONGTEXT NOT NULL');
        $this->addSql('ALTER TABLE followup_goals DROP FOREIGN KEY FK_BB997A6B85CFD64C');
        $this->addSql('ALTER TABLE followup_goals ADD CONSTRAINT FK_BB997A6B85CFD64C FOREIGN KEY (cont_id) REFERENCES contacts (id) ON UPDATE NO ACTION ON DELETE CASCADE');
    }
}
