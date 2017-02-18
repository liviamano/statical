<?php

class QueryBuilder
{
    protected $pdo;

    public function __construct(PDO $pdo)
    {
        $this->pdo = $pdo;
    }

    public function selectAll($table)
    {
        $statement = $this->pdo->prepare("select * from {$table}");
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_OBJ);
    }

    public function selectAllPercentage($table)
    {
//
//        $statement_count_never_attended = $this->pdo->prepare("select sum(never_attended) from {$table}");
//        $statement_count_no_diploma = $this->pdo->prepare("select sum(no_diploma) from {$table}");
//        $statement_count_primary = $this->pdo->prepare("select sum(primary) from {$table}");
//        $statement_count_low_secondary = $this->pdo->prepare("select sum(low_secondary) from {$table}");
//        $statement_count_high_school = $this->pdo->prepare("select sum(high_school) from {$table}");
//        $statement_count_uni_bachelor = $this->pdo->prepare("select sum(uni_bachelor) from {$table}");
//        $statement_count_uni_phd = $this->pdo->prepare("select sum(uni_master) from {$table}");
//
//        $total_never_attended = $this->ex($statement_count_never_attended);
//        $total_no_diploma = $this->ex($statement_count_no_diploma);
//        $total_primary = $this->ex($statement_count_primary);
//        $total_low_secondary = $this->ex($statement_count_low_secondary);
//        $total_high_school = $this->ex($statement_count_high_school);
//        $total_uni_bachelor = $this->ex($statement_count_uni_bachelor);
//        $total_uni_phd = $this->ex($statement_count_uni_phd);

        $statement = $this->pdo->prepare("select * from {$table}");
        $statement->execute();
        $results = $statement->fetchAll(PDO::FETCH_OBJ);
//        foreach( $results as $result){
//            $result['never_attended'] = 0;
//        }
        return $results;
    }

//    private function ex($count_statement)
//    {
//        $count_statement->execute();
//        $total_count = $count_statement->fetch(PDO::FETCH_ASSOC);
//        return $total_count;
//    }

}