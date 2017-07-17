<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 1)->create([
          'name' => 'Bobby Bob',
          'email' => 'bob@bob.com'
        ]);
        factory(App\User::class, 49)->create();
    }
}
