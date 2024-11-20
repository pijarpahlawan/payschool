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
        Schema::create('user_bills', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('bill_id');
            $table->integer('debt');
            $table->boolean('is_paid_off');
            $table->timestamps();

            // Foreign key definition
            $table->foreign('user_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');
            $table->foreign('bill_id')->references('id')->on('bills')->onUpdate('cascade')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('user_bills', function (Blueprint $table) {
            // Drop foreign key
            $table->dropForeign(['user_id']);
            $table->dropForeign(['bill__id']);
        });

        // Drop the table
        Schema::dropIfExists('user_bills');
    }
};
