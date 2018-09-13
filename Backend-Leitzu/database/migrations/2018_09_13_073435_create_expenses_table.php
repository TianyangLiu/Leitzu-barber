<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateExpensesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        /*
         * activity_cost 
         * 会记录做的项目和价格
         * 可能由多个项目组合
         * 格式大概为： 剪发&30/烫染&50
         * 上面例子是两个项目，价格用'&'号区分，项目区分用'/'
         */
        Schema::create('expenses', function (Blueprint $table) {
            $table->increments('id');
            $table->text('activity_cost');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('expenses');
    }
}
