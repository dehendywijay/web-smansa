// Komponen ini bertanggung jawab untuk menampilkan daftar berita dalam bentuk tabel.
"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import NewsForm from "./NewsForm";
import { formatDate } from "@/lib/date";
import { useNewsData } from "@/hook/useNewsData";
import ReusablePagination from "../shared/ReusablePagination"; // Impor komponen paginasi baru

export default function NewsDataTable() {
  const {
    paginatedNews,
    isFormOpen,
    editingNews,
    currentPage,
    totalPages,
    handleSave,
    handleDelete,
    handleEdit,
    handleAdd,
    setIsFormOpen,
    setCurrentPage,
  } = useNewsData();

  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between gap-4">
        <Input placeholder="Cari berita..." className="max-w-sm" />
        <div className="flex items-center gap-2">
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter berdasarkan status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Semua</SelectItem>
              <SelectItem value="published">Diterbitkan</SelectItem>
              <SelectItem value="draft">Draf</SelectItem>
            </SelectContent>
          </Select>
          <Button onClick={handleAdd}>Tambah Berita</Button>
        </div>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Judul</TableHead>
              <TableHead>Penulis</TableHead>
              <TableHead>Tanggal</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedNews.map((newsItem) => (
              <TableRow key={newsItem.id}>
                <TableCell>{newsItem.id}</TableCell>
                <TableCell className="font-medium">{newsItem.title}</TableCell>
                <TableCell>{newsItem.author}</TableCell>
                <TableCell>{formatDate(newsItem.createdAt)}</TableCell>
                <TableCell>
                  <Badge variant={newsItem.status === "published" ? "default" : "secondary"}>{newsItem.status}</Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => handleEdit(newsItem)}>
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="text-red-500" onClick={() => handleDelete(newsItem.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Gunakan komponen paginasi yang dapat digunakan kembali */}
      <ReusablePagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
      <NewsForm open={isFormOpen} onOpenChange={setIsFormOpen} onSave={handleSave} initialData={editingNews} />
    </div>
  );
}
