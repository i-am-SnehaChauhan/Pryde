import React from 'react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import BlogList from '../../components/BlogList'
import { blogList } from '../../config/data'

const ReadingArea = () => {
  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <SearchBar />

      {/* Blog List */}
      <BlogList blogs={blogList}/>
    </div>
  )
}

export default ReadingArea
