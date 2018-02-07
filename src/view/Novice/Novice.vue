<template>
  <div>
      <Panel title="标题" :class="$style.panel">
          内容测试
      </Panel>
  </div>
</template>

<script>
import Panel from 'core/panel'
export default{
  name: 'novice',
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
  @import '~css/element.scss';
  .panel{
    @include panel;
    >h4{
      border-bottom: 1px solid #ddd;
    }
    .content{
      @include list(row);
      .item{
        width: 50%;
        box-sizing: border-box;
        &:first-child{
          padding: 32px 20px;
          text-align: center;
          border-right: 1px solid #ddd;
          img{
            width: 132px;
            height: 132px;
            margin: 20px auto 0;
          }
        }
        h4{
          font-size: 26px;
          line-height: 40px;
        }
        .red{
          color: #f00;
        }
        .gray{
          color: #999;
          font-size: 24px;
        }
        p{
          margin-top: 6px;
          font-size: 24px;
        }
        ul{
          width: 100%;
          li{
            height: 144px;
            width: 100%;
            padding: 32px 28px;
            box-sizing: border-box;
            &:first-child{
              border-bottom: 1px solid #ddd;
            }
            h4{
              white-space: nowrap;
              text-overflow: ellipsis;
              overflow: hidden;
              text-align: left;
            }
            img{
              width: 80px;
              height: 80px;
              float: right;
            }
          }
        }
      }
    }
  }
</style>
