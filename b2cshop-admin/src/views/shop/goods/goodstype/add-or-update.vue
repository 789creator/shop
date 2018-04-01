<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()" label-width="80px">
      <el-form-item label="类型名称" prop="name">
        <el-input v-model="dataForm.name" placeholder="类型名称"></el-input>
      </el-form-item>
      <el-form-item label="一级分类id" prop="catId1">
        <el-input v-model="dataForm.catId1" placeholder="一级分类id"></el-input>
      </el-form-item>
      <el-form-item label="二级分类id" prop="catId2">
        <el-input v-model="dataForm.catId2" placeholder="二级分类id"></el-input>
      </el-form-item>
      <el-form-item label="三级分类id" prop="catId3">
        <el-input v-model="dataForm.catId3" placeholder="三级分类id"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="visible = false">取消</el-button>
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    </span>
  </el-dialog>
</template>

<script>
  import API from '@/api'
  export default {
    data () {
      return {
        visible: false,
        dataForm: {
          id: 0,
          name: '',
          catId1: '',
          catId2: '',
          catId3: ''
        },
        dataRule: {
          name: [
            { required: true, message: '类型名称不能为空', trigger: 'blur' }
          ],
          catId1: [
            { required: true, message: '一级分类id不能为空', trigger: 'blur' }
          ],
          catId2: [
            { required: true, message: '二级分类id不能为空', trigger: 'blur' }
          ],
          catId3: [
            { required: true, message: '三级分类id不能为空', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      init (id) {
        this.dataForm.id = id || 0
        this.visible = true
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.id) {
            API.goodstype.info(this.dataForm.id).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.name = data.goodstype.name
                this.dataForm.catId1 = data.goodstype.catId1
                this.dataForm.catId2 = data.goodstype.catId2
                this.dataForm.catId3 = data.goodstype.catId3
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit () {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            var params = {
              'id': this.dataForm.id || undefined,
              'name': this.dataForm.name,
              'catId1': this.dataForm.catId1,
              'catId2': this.dataForm.catId2,
              'catId3': this.dataForm.catId3
            }
            var tick = !this.dataForm.id ? API.goodstype.add(params) : API.goodstype.update(params)
            tick.then(({data}) => {
              if (data && data.code === 0) {
                this.$message({
                  message: '操作成功',
                  type: 'success',
                  duration: 1500,
                  onClose: () => {
                    this.visible = false
                    this.$emit('refreshDataList')
                  }
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }
        })
      }
    }
  }
</script>
