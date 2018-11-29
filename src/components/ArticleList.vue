<template>
  <div>
    <ul class="list-group my_list">
      <li class="my_list_item ">
        <a><span></span></a><a></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "ArticleList"
  }
</script>

<style scoped>
  .my_list {
    border: 0px;
  }
  .my_list_item {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    background-color: #fff;
    border-bottom: 1px solid #d7d7d7;
  }
  .my_list_item a {
    color: #212529;
    display:block;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    font-size: 14px;
  }
  .my_list_item a :hover{
    color: #1296db;
  }
  .my_list_item a span {
    margin-left: 4%;
  }

  .my_media > view{
    width: 50%;
  }
  .my_media  img{
    width:60px;
  }
</style>
