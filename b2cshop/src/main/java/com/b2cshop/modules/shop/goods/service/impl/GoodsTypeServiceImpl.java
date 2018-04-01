package com.b2cshop.modules.shop.goods.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.b2cshop.common.utils.PageUtils;
import com.b2cshop.common.utils.Query;

import com.b2cshop.modules.shop.goods.dao.GoodsTypeDao;
import com.b2cshop.modules.shop.goods.entity.GoodsTypeEntity;
import com.b2cshop.modules.shop.goods.service.GoodsTypeService;


@Service("goodsTypeService")
public class GoodsTypeServiceImpl extends ServiceImpl<GoodsTypeDao, GoodsTypeEntity> implements GoodsTypeService {

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<GoodsTypeEntity> page = this.selectPage(
                new Query<GoodsTypeEntity>(params).getPage(),
                new EntityWrapper<GoodsTypeEntity>()
        );

        return new PageUtils(page);
    }

}
