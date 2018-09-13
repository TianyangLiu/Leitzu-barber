<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);

        factory(App\Model\Client::class, 10)->create();

        factory(App\Model\Record::class, 10)->create();

        factory(App\Model\Expense::class, 50)->create();
    }
}
