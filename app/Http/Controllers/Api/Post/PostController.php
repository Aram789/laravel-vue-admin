<?php

namespace App\Http\Controllers\Api\Post;

use App\Http\Controllers\Controller;
use App\Http\Requests\PostRequest;
use App\Models\Post;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Post::all();
    }

    public function store(PostRequest $request)
    {
        $data = $request->validated();
        Post::query()->create($data);

        return [
            'status' => 'success',
            'data' => $data
        ];
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return Post::query()->find($id);
    }

    public function update(PostRequest $request, string $id)
    {
        $data = $request->validated();

        Post::query()->find($id)->update($data);

        return [
            'status' => 'updated',
        ];
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Post::destroy($id);

        return [
            'status' => 'deleted',
        ];
    }
}
