<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20221116134326 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_places DROP FOREIGN KEY FK_F426A924DA6A219');
        $this->addSql('DROP INDEX IDX_F426A924DA6A219 ON patients_places');
        $this->addSql('ALTER TABLE patients_places DROP place_id');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE patients_places ADD place_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE patients_places ADD CONSTRAINT FK_F426A924DA6A219 FOREIGN KEY (place_id) REFERENCES contacts (id) ON UPDATE NO ACTION ON DELETE NO ACTION');
        $this->addSql('CREATE INDEX IDX_F426A924DA6A219 ON patients_places (place_id)');
    }
}
