<template>
  <el-dialog
    :title="!dataForm.id ? '新增' : '修改'"
    :close-on-click-modal="false"
    :visible.sync="visible">
    <el-form :model="dataForm" :rules="dataRule" ref="dataForm" @keyup.enter.native="dataFormSubmit()">
      <el-form-item>
        <el-col :span="10">
          <el-form-item label="规格名称" prop="name" label-width="80px">
            <el-input v-model="dataForm.name" placeholder="规格名称"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10">
          <el-form-item label="排序" prop="order" label-width="80px">
            <el-input v-model="dataForm.order" placeholder="排序"></el-input>
          </el-form-item>
        </el-col>
      </el-form-item>

      <el-form-item label-width="80px">
        <el-checkbox name="searchIndex"
                     v-model="dataForm.searchIndex">是否检索
        </el-checkbox>
      </el-form-item>
      <el-form-item label="所属分类" label-width="80px">
        <el-cascader
          :options="categoryList"
          :props="props"
          v-model="selectedOptions"
          @change="handleChange">
        </el-cascader>
      </el-form-item>
      <el-form-item label="规格值类型" prop="specValType" label-width="100px">
        <!--<el-input v-model="dataForm.specValType" placeholder="规格值类型"></el-input>-->
      </el-form-item>
      <el-form-item label="规格值内容" prop="specVal">
        <el-input v-model="dataForm.specVal" placeholder="规格值内容"></el-input>
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
    data() {
      return {
        visible: false,
        categoryList: [],
        selectedOptions: [],
        props: {
          label:"name",
          value:"id"
        },
        dataForm: {
          id: 0,
          name: '',
          order: '',
          searchIndex: '',
          catId1: '',
          catId2: '',
          catId3: '',
          specValType: '',
          specVal: ''
        },
        dataRule: {
          name: [
            {required: true, message: '规格名称不能为空', trigger: 'blur'}
          ],
          order: [
            {required: true, message: '排序不能为空', trigger: 'blur'}
          ],
          searchIndex: [
            {required: true, message: '是否需要检索不能为空', trigger: 'blur'}
          ],
          catId1: [
            {required: true, message: '一级分类不能为空', trigger: 'blur'}
          ],
          catId2: [
            {required: true, message: '二级分类不能为空', trigger: 'blur'}
          ],
          catId3: [
            {required: true, message: '三级分类不能为空', trigger: 'blur'}
          ],
          specValType: [
            {required: true, message: '规格值类型不能为空', trigger: 'blur'}
          ],
          specVal: [
            {required: true, message: '规格值内容不能为空', trigger: 'blur'}
          ]
        }
      }
    },
    components: {
    },
    methods: {
      init(id) {
        this.categoryList = JSON.parse(sessionStorage.getItem("categoryList"));
        this.dataForm.id = id || 0;
        this.visible = true;
        this.$nextTick(() => {
          this.$refs['dataForm'].resetFields()
          if (this.dataForm.id) {
            API.spec.info(this.dataForm.id).then(({data}) => {
              if (data && data.code === 0) {
                this.dataForm.name = data.spec.name
                this.dataForm.order = data.spec.order
                this.dataForm.searchIndex = data.spec.searchIndex
                this.dataForm.catId1 = data.spec.catId1
                this.dataForm.catId2 = data.spec.catId2
                this.dataForm.catId3 = data.spec.catId3
                this.dataForm.specValType = data.spec.specValType
                this.dataForm.specVal = data.spec.specVal
              }
            })
          }
        })
      },
      // 表单提交
      dataFormSubmit() {
        this.$refs['dataForm'].validate((valid) => {
          if (valid) {
            var params = {
              'id': this.dataForm.id || undefined,
              'name': this.dataForm.name,
              'order': this.dataForm.order,
              'searchIndex': this.dataForm.searchIndex,
              'catId1': this.dataForm.catId1,
              'catId2': this.dataForm.catId2,
              'catId3': this.dataForm.catId3,
              'specValType': this.dataForm.specValType,
              'specVal': this.dataForm.specVal
            }
            var tick = !this.dataForm.id ? API.spec.add(params) : API.spec.update(params)
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
      },
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>
