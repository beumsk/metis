<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230106184930 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP INDEX `primary` ON indicators_indicators_groups');
        $this->addSql('ALTER TABLE indicators_indicators_groups ADD igrp_id INT NOT NULL, CHANGE id indi_id INT NOT NULL');
        $this->addSql('ALTER TABLE indicators_indicators_groups ADD CONSTRAINT FK_8B2D54FC220CD44 FOREIGN KEY (indi_id) REFERENCES indicators (id)');
        $this->addSql('ALTER TABLE indicators_indicators_groups ADD CONSTRAINT FK_8B2D54FCE79EE6BB FOREIGN KEY (igrp_id) REFERENCES indicators_groups (id)');
        $this->addSql('CREATE INDEX IDX_8B2D54FC220CD44 ON indicators_indicators_groups (indi_id)');
        $this->addSql('CREATE INDEX IDX_8B2D54FCE79EE6BB ON indicators_indicators_groups (igrp_id)');
        $this->addSql('ALTER TABLE indicators_indicators_groups ADD PRIMARY KEY (indi_id, igrp_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE indicators_indicators_groups DROP FOREIGN KEY FK_8B2D54FC220CD44');
        $this->addSql('ALTER TABLE indicators_indicators_groups DROP FOREIGN KEY FK_8B2D54FCE79EE6BB');
        $this->addSql('DROP INDEX IDX_8B2D54FC220CD44 ON indicators_indicators_groups');
        $this->addSql('DROP INDEX IDX_8B2D54FCE79EE6BB ON indicators_indicators_groups');
        $this->addSql('DROP INDEX `PRIMARY` ON indicators_indicators_groups');
        $this->addSql('ALTER TABLE indicators_indicators_groups ADD id INT NOT NULL, DROP indi_id, DROP igrp_id');
        $this->addSql('ALTER TABLE indicators_indicators_groups ADD PRIMARY KEY (id)');
    }
}
