<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('nis', 255)->nullable()->after('name');
            $table->integer('grade_class')->nullable()->after('nis');
            $table->string('major_class')->nullable()->after('grade_class');
            $table->integer('sub_class')->nullable()->after('major_class');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['nis', 'grade_class', 'major_class', 'sub_class']);
        });
    }
};
