from django.contrib import admin

from .models import Book


class BookAdmin(admin.ModelAdmin):
    list_display = ('title', 'author', 'status', 'rating')  # Columns to display in the list view
    list_filter = ('status', 'rating')  # Adds filters in the sidebar for status and rating
    search_fields = ('title', 'author')  # Adds a search box to search by title and author
    ordering = ('title',)  # Orders the books by title by default


admin.site.register(Book, BookAdmin)
