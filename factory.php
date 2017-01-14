<?php

require 'database/PDOConnection.php';
require 'database/QueryBuilder.php';

return new QueryBuilder(PDOConnection::make());
