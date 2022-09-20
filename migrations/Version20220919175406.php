<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220919175406 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE contacts (id INT AUTO_INCREMENT NOT NULL, firstname VARCHAR(255) DEFAULT NULL, lastname VARCHAR(255) DEFAULT NULL, type INT NOT NULL, description LONGTEXT DEFAULT NULL, url LONGTEXT NOT NULL, deleted_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contacts_information (id INT AUTO_INCREMENT NOT NULL, value LONGTEXT DEFAULT NULL, comment LONGTEXT NOT NULL, deleted_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE followup_goals (id INT AUTO_INCREMENT NOT NULL, pati_id INT NOT NULL, title VARCHAR(255) DEFAULT NULL, status INT NOT NULL, description LONGTEXT NOT NULL, type INT NOT NULL, is_hightlight INT DEFAULT NULL, creation_date DATETIME DEFAULT NULL, delete_at DATE DEFAULT NULL, INDEX IDX_BB997A6B61D0310E (pati_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE followup_reports (id INT AUTO_INCREMENT NOT NULL, pati_id INT NOT NULL, user_id INT NOT NULL, activity_type INT NOT NULL, report_type INT NOT NULL, report_date DATETIME DEFAULT NULL, last_update DATETIME NOT NULL, creation_date DATETIME NOT NULL, content LONGTEXT NOT NULL, is_hightlight INT DEFAULT NULL, no_care INT DEFAULT NULL, no_activities INT DEFAULT NULL, no_indicators INT DEFAULT NULL, deleted_at DATETIME DEFAULT NULL, duration TIME DEFAULT NULL, INDEX IDX_2FD5F4B861D0310E (pati_id), INDEX IDX_2FD5F4B8A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE followup_reports_activities (id INT AUTO_INCREMENT NOT NULL, fore_id INT NOT NULL, description LONGTEXT NOT NULL, is_idr_step INT DEFAULT NULL, INDEX IDX_549398349A42B392 (fore_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE followup_reports_indicators (id INT AUTO_INCREMENT NOT NULL, value INT DEFAULT NULL, comment LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE indicators (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE medias (id INT AUTO_INCREMENT NOT NULL, pati_id INT NOT NULL, comment LONGTEXT NOT NULL, filename LONGTEXT NOT NULL, original_filename LONGTEXT NOT NULL, date DATETIME NOT NULL, is_confidential INT DEFAULT NULL, is_highlight INT DEFAULT NULL, deleted_at DATETIME DEFAULT NULL, INDEX IDX_12D2AF8161D0310E (pati_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE patients (id INT AUTO_INCREMENT NOT NULL, hash VARCHAR(7) DEFAULT NULL, firstname VARCHAR(255) DEFAULT NULL, lastname VARCHAR(255) DEFAULT NULL, nicknames LONGTEXT NOT NULL, birthdate DATETIME DEFAULT NULL, unknown_year INT DEFAULT NULL, birth_location LONGTEXT NOT NULL, story LONGTEXT NOT NULL, status VARCHAR(25) DEFAULT NULL, first_contact_date DATETIME DEFAULT NULL, deleted_at DATETIME DEFAULT NULL, follow_up_type INT NOT NULL, team VARCHAR(50) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE patients_information_template (id INT AUTO_INCREMENT NOT NULL, order_template INT DEFAULT NULL, block INT DEFAULT NULL, required INT DEFAULT NULL, edit_type INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE patients_places (id INT AUTO_INCREMENT NOT NULL, inaccurate INT DEFAULT NULL, comment INT DEFAULT NULL, start DATETIME DEFAULT NULL, start_inaccurate INT DEFAULT NULL, end DATETIME DEFAULT NULL, end_inaccurate INT DEFAULT NULL, is_hightlight INT DEFAULT NULL, is_streetplace INT DEFAULT NULL, is_refaddress INT DEFAULT NULL, deleted_at DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE places (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, description LONGTEXT NOT NULL, url LONGTEXT NOT NULL, deleted DATETIME DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE suggestions (id INT AUTO_INCREMENT NOT NULL, value VARCHAR(255) NOT NULL, path VARCHAR(255) DEFAULT NULL, path_string LONGTEXT NOT NULL, require_custom_value INT DEFAULT NULL, is_locked INT DEFAULT NULL, attributes VARCHAR(255) DEFAULT NULL, default_comment VARCHAR(255) DEFAULT NULL, is_deleted INT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE user (id INT AUTO_INCREMENT NOT NULL, username VARCHAR(180) NOT NULL, username_canonical VARCHAR(180) NOT NULL, email VARCHAR(180) NOT NULL, email_canonical VARCHAR(180) NOT NULL, enabled SMALLINT NOT NULL, salt VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL, last_login DATE NOT NULL, confirmation_token VARCHAR(255) NOT NULL, password_requested_at DATETIME NOT NULL, roles JSON NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649F85E0677 (username), UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE usersgroups (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, name VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL, name_groups VARCHAR(255) DEFAULT NULL, name_sousgroup VARCHAR(255) DEFAULT NULL, email VARCHAR(255) DEFAULT NULL, INDEX IDX_9D2271A5A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE followup_goals ADD CONSTRAINT FK_BB997A6B61D0310E FOREIGN KEY (pati_id) REFERENCES patients (id)');
        $this->addSql('ALTER TABLE followup_reports ADD CONSTRAINT FK_2FD5F4B861D0310E FOREIGN KEY (pati_id) REFERENCES patients (id)');
        $this->addSql('ALTER TABLE followup_reports ADD CONSTRAINT FK_2FD5F4B8A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
        $this->addSql('ALTER TABLE followup_reports_activities ADD CONSTRAINT FK_549398349A42B392 FOREIGN KEY (fore_id) REFERENCES followup_reports (id)');
        $this->addSql('ALTER TABLE medias ADD CONSTRAINT FK_12D2AF8161D0310E FOREIGN KEY (pati_id) REFERENCES patients (id)');
        $this->addSql('ALTER TABLE usersgroups ADD CONSTRAINT FK_9D2271A5A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE followup_goals DROP FOREIGN KEY FK_BB997A6B61D0310E');
        $this->addSql('ALTER TABLE followup_reports DROP FOREIGN KEY FK_2FD5F4B861D0310E');
        $this->addSql('ALTER TABLE followup_reports DROP FOREIGN KEY FK_2FD5F4B8A76ED395');
        $this->addSql('ALTER TABLE followup_reports_activities DROP FOREIGN KEY FK_549398349A42B392');
        $this->addSql('ALTER TABLE medias DROP FOREIGN KEY FK_12D2AF8161D0310E');
        $this->addSql('ALTER TABLE usersgroups DROP FOREIGN KEY FK_9D2271A5A76ED395');
        $this->addSql('DROP TABLE contacts');
        $this->addSql('DROP TABLE contacts_information');
        $this->addSql('DROP TABLE followup_goals');
        $this->addSql('DROP TABLE followup_reports');
        $this->addSql('DROP TABLE followup_reports_activities');
        $this->addSql('DROP TABLE followup_reports_indicators');
        $this->addSql('DROP TABLE indicators');
        $this->addSql('DROP TABLE medias');
        $this->addSql('DROP TABLE patients');
        $this->addSql('DROP TABLE patients_information_template');
        $this->addSql('DROP TABLE patients_places');
        $this->addSql('DROP TABLE places');
        $this->addSql('DROP TABLE suggestions');
        $this->addSql('DROP TABLE user');
        $this->addSql('DROP TABLE usersgroups');
    }
}
