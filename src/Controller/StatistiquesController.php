<?php

namespace App\Controller;

use mysqli;
use GuzzleHttp\Client;
use App\Entity\Patients;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class StatistiquesController extends AbstractController
{
    const SERVERNAME = "127.0.0.1:3306";
    const USERNAME = "root";
    const PASSWORD = "Foutaise.1";
    const DBNAME = "metisapp";

    #[Route('/api/statistiques6', name: 'app_statistiques6')]
    public function request6()
    {

        // Ne fonctionne pas
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = 'SELECT antenna, id, count(status) as c from patients group by antenna, id having c > 1';

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header('Content-type: application/json');
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }


    #[Route('/api/statistiques5', name: 'app_statistiques5')]
    public function request5()
    {
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = 'SELECT 
                    p.hash, 
                    p.firstname, 
                    p.lastname, 
                    s.value, 
                    pi.end, 
                    pi2.start, 
                    s2.value
                FROM 
                    patients as p 
                    inner join patients_information as pi on p.id = pi.pati_id 
                    inner join suggestions as s on s.id = pi.sugg_id 
                    inner join patients_information as pi2 on p.id = pi2.pati_id 
                    inner join suggestions as s2 on s2.id = pi2.sugg_id 
                where 
                    s.path_string like "/patient/fiche/statut-du-suivi/%" 
                    and s2.path_string like "/patient/fiche/statut-du-suivi/%" 
                    and (pi2.start < pi.end) 
                    and (pi.start < pi2.start) 
                    and pi.id != pi2.id 
                    and pi.deleted_at is null 
                    and pi2.deleted_at is null 
            order by 
                p.firstname, 
                p.lastname, 
                pi.start';

        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header('Content-type: application/json');
                array_push($resultJson, $row);
            }
            // dd($this->json($resultJson));
            return $this->json($resultJson);
        } else {
            return $this->json("Pas de résultats pour l'instant");
        }
        $conn->close();
    }



    #[Route('/api/statistiques4', name: 'app_statistiques4')]
    public function request4()
    {
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = 'SELECT
                p.hash, 
                p.firstname, 
                p.lastname, 
                pi.start, 
                pi.end, 
                s.value 
            FROM 
                patients as p 
                inner join patients_information as pi on p.id = pi.pati_id 
                inner join suggestions as s on s.id = pi.sugg_id 
            where 
                s.path_string like "/patient/fiche/statut-du-suivi/decede" 
                and pi.start is null 
                and pi.deleted_at is null
            ';
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header('Content-type: application/json');
                array_push($resultJson, $row);
            }
            return $this->json($resultJson);
        } else {
            echo "0 results";
        }
        $conn->close();
    }


    #[Route('/api/statistiques3', name: 'app_statistiques3')]
    public function request3()
    {
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = 'select 	h, 	ln, fn, ch, val from 
        (
            select 
                h, count(h) as ch, val, fn, ln 
            from 
                (
                    SELECT 
                        s.value as val, 
                        p.hash as h, 
                        p.firstname as fn, 
                        p.lastname as ln 
                    FROM 
                        patients as p 
                        inner join patients_information as pi on p.id = pi.pati_id 
                        inner join suggestions as s on s.id = pi.sugg_id 
                    where 
                        (
                            s.path_string like "/patient/fiche/statut-du-suivi/signalement%" 
                            or s.path_string like "/patient/fiche/statut-du-suivi/6" 
                            or s.path_string like "/patient/fiche/statut-du-suivi/pre-suivi%" 
                            or s.path_string like "/patient/fiche/statut-du-suivi/en-suivi" 
                            or s.path_string like "/patient/fiche/statut-du-suivi/post-suivi" 
                            or (
                                s.path_string like "/patient/fiche/statut-du-suivi/disparu" 
                                and year(pi.start) like year(@refdate)
                            ) 
                            or (
                                s.path_string like "/patient/fiche/statut-du-suivi/decede" 
                                and year(pi.start) like year(@refdate)
                            )
                        ) 
                        and pi.end is null 
                        and pi.deleted_at is null 
                        and p.deleted_at is null 
                    order by 
                        s.value, 
                        p.firstname, 
                        p.lastname, 
                        pi.start
                ) q 
            group by h, val, fn, ln 
        ) q 
    where 
        ch > 1;
    ';
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header('Content-type: application/json');
                array_push($resultJson, $row);
            }
            return $this->json($resultJson);
        } else {
            echo "0 results";
        }
        $conn->close();
    }


    #[Route('/api/statistiques2', name: 'app_statistiques2')]
    public function request2()
    {
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT 
        p.id,
        p.hash
    FROM 
        patients as p 
        inner join patients_information as pi on p.id = pi.pati_id 
        inner join suggestions as s on s.id = pi.sugg_id 
    where 
        pi.end is null 
        and pi.deleted_at is null 
        and s.path_string like '/patient/fiche/statut-du-suivi%'
        and p.status != s.value;
    ";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header('Content-type: application/json');
                array_push($resultJson, $row);
            }
            return $this->json($resultJson);
        } else {
            echo "0 results";
        }
        $conn->close();
    }

    #[Route('/api/statistiques1', name: 'app_statistiques')]
    public function request()
    {
        $conn = new mysqli(StatistiquesController::SERVERNAME, StatistiquesController::USERNAME, StatistiquesController::PASSWORD, StatistiquesController::DBNAME);

        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT s_antenna.value AS antenna, p.id,  p.hash,  s_stat.value AS statut, 
            COALESCE(g.genre, '--inconnu--') AS genre, 
            COALESCE(n.nationalite, '--inconnu--') AS nationalite,  
            COALESCE(prog.programme, '--inconnu--') AS programme,
            COALESCE(team.team, '--inconnu--') AS team 
            FROM patients p
            LEFT JOIN patients_information pi_stat ON pi_stat.pati_id = p.id
            LEFT JOIN suggestions s_stat ON s_stat.id = pi_stat.sugg_id 
            LEFT JOIN patients_information pi_antenna ON pi_antenna.pati_id = p.id 
            LEFT JOIN suggestions s_antenna ON s_antenna.id = pi_antenna.sugg_id
            LEFT JOIN 
            (
                SELECT 
                s.value AS genre,
                pi.pati_id
                FROM 
                patients_information pi 
                INNER JOIN information_template_element pitel ON pitel.id = pi.itel_id 
                INNER JOIN suggestions stel ON stel.id = pitel.suge_id 
                INNER JOIN suggestions s ON s.id = pi.sugg_id 
                WHERE stel.path_string LIKE '/patient/fiche/information-generale/genre%'
                AND '2020-12-31' BETWEEN COALESCE(pi.start, @past) AND COALESCE (pi.end, '2020-12-31')
                AND pi.deleted_at IS NULL
            ) g ON p.id = g.pati_id 		

            left join 
            (
                SELECT 
                s.value as nationalite,
                pi.pati_id
                from 
                patients_information pi 
                inner join information_template_element pitel on pitel.id = pi.itel_id 
                inner join suggestions stel on stel.id = pitel.suge_id 
                inner JOIN suggestions s on s.id = pi.sugg_id 
                where 
                stel.path_string like '/patient/fiche/information-generale/nationalite%'
                and '2020-12-31' between COALESCE(pi.start, @past) and COALESCE (pi.end, '2020-12-31')
                and pi.deleted_at is null
            ) n on p.id = n.pati_id

            left join 
            (
                SELECT 
                s.value as programme,
                pi.pati_id
                from 
                patients_information pi 
                inner join information_template_element pitel on pitel.id = pi.itel_id 
                inner join suggestions stel on stel.id = pitel.suge_id 
                inner JOIN suggestions s on s.id = pi.sugg_id 
                where 
                stel.path_string like '/patient/suivi/programme%'
                and '2020-12-31' between COALESCE(pi.start, @past) and COALESCE (pi.end, '2020-12-31')
                and pi.deleted_at is null
            ) prog on p.id = prog.pati_id

            left join 
            (
                SELECT 
                s.value as team,
                pi.pati_id
                from 
                patients_information pi 
                inner join information_template_element pitel on pitel.id = pi.itel_id 
                inner join suggestions stel on stel.id = pitel.suge_id 
                inner JOIN suggestions s on s.id = pi.sugg_id 
                where 
                stel.path_string like '/patient/suivi/equipes%'
                and '2020-12-31' between COALESCE(pi.start, @past) and COALESCE (pi.end, '2020-12-31')
                and pi.deleted_at is null
            ) team on p.id = team.pati_id

            WHERE p.deleted_at is null

            and s_stat.path_string like '/patient/fiche/statut-du-suivi/%'
            and '2020-12-31' between coalesce(pi_stat.start, @past) and coalesce(pi_stat.end, '2020-12-31')
            and pi_stat.deleted_at is null

            and s_antenna.path_string like '/patient/suivi/antenne/%'
            and '2020-12-31' between coalesce(pi_antenna.start, @past) and coalesce(pi_antenna.end, '2020-12-31')
            and pi_antenna.deleted_at is null;
    ";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $resultJson = [];
            while ($row = $result->fetch_assoc()) {
                header('Content-type: application/json');
                array_push($resultJson, $row);
            }
            return $this->json($resultJson);
        } else {
            echo "0 results";
        }
        $conn->close();
    }
}
