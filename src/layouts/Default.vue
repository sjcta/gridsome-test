<template>
  <div>
    <p id="top"><a href="#body">跳到正文</a></p>

    <div id="HeaderArea">
      <div id="HeaderSet">
        <p class="Statement"><a href="http://www.hitachi.com/"><img src="/image/cn/r1/corp_id.gif" alt="Hitachi" height="29" /></a></p>
        <div id="Search">
          <p class="BtnOpen"><a href="http://www.hitachi.com/search-e/"><img src="/image/cn/r1/icon/icon_navi_search.gif" width="21" height="21" alt="搜索" />搜索</a></p>
        </div>
        <div id="CountryRegion">
          <p class="BtnOpen"><a href="http://www.hitachi.com/global/index.html"><img src="/image/cn/r1/icon/icon_navi_country.gif" width="21" height="21" alt="Select Country/Region" />China</a></p>
        </div>
        <div id="UltraGlobalNavi">
          <p id="UltraGlobalNaviProducts" class="BtnOpen"><a href="http://www.hitachi.com.cn/products/index.html">日立集团<br />产品及服务</a></p>
          <p id="UltraGlobalNaviCompany" class="BtnOpen"><a href="http://www.hitachi.com.cn/about/index.html">日立集团<br />企业信息</a></p>
        </div><!--/UltraGlobalNavi-->
      </div><!--/HeaderSet-->
    </div><!--/HeaderArea-->

    <div id="SiteIdentity">
        <h1 id="body" class="Title"><a href="/index.html"><img :src="$static.metaData.siteNameImage" :alt="$static.metaData.siteName" height="50" /></a></h1>
    </div><!--/SiteIdentity-->

    <div id="GlobalNavi">
        <div class="ClearFix">
        <ul class="CourtesyNavi">
            <li><a href="sitemap/index.html">网站地图</a></li>
            <li><a href="inquiry/index.html">联系我们</a></li>
        </ul>
        <ul id="GlobalNaviTop">
        <li><a href="products/index.html">产品介绍</a></li>
        <li><a href="video/index.html">广告大片</a></li>
        <li><a href="news/index.html">新闻资讯</a></li>
        <li><a href="service/index.html">咨询服务</a></li>
        <li><a href="network/index.html">销售网点</a></li>
        <li><a href="aboutus/index.html">关于我们</a></li>
        </ul>
        </div><!--/ClearFix-->
    </div><!--/GlobalNavi-->


    <div class="Layout">
        <header class="header">
          <strong>
            <g-link to="/">{{ $static.metaData.siteName }}</g-link>
          </strong>
          <nav class="nav">
            <g-link class="nav__link" to="/">Home</g-link>
            <g-link class="nav__link" to="/about">About</g-link>
            <g-link class="nav__link" to="/products">Products</g-link>
            <g-link class="nav__link" to="/page2">2nd Page</g-link>
          </nav>
        </header>
        <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import $ from 'jquery'

export default {
  data () {
    return {
      message: 'Try change me!'
    }
  },
  mounted () {
    
    
  },
  methods: {
    onClick () {
      this.message = 'Here you go :)';
      console.log($('.nav').html())
    }
  }
}

</script>

<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.layout {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.nav__link {
  margin-left: 20px;
}
</style>
